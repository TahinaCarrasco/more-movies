import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/forms';
import { Router } from '@angular/router';
import { Validator } from 'class-validator';
import { ConfigService } from 'src/app/resources/config.service';
import { Usuario } from '../models/usuario.model';
import { Genero } from './../models/gerero.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  isGeneros = new Array<Genero>();

  usuario = new Usuario();
  formValid = false;
  submit = false;

  constructor(
    private http: HttpClient,
    private validator: Validator,
    private router: Router,
    private configUrl: ConfigService
  ) { }

  ngOnInit() {

    this.carregaGeneros();

    if (this.validator.isEmpty(this.usuario.idGeneros)) {
      this.usuario.idGeneros = new Array<String>();
    }
  }

  setSexoSelecionado(sexo: string): void {
    this.usuario.sexo = sexo;
  }

  setGenero(isGenero: Genero): void {
    this.usuario.idGeneros.push(isGenero.id_genero);
  }

  enviarDadosCadastrados(usuario: Usuario): void {
    const url = `${this.configUrl.baseUrl}usuario/criar.php`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 123456'
      })
    };

    this.http.post<{ results: Array<any> }>(url, JSON.stringify(usuario), httpOptions).subscribe((dados: any) => {

      // Variaveis
      const erro: string = dados.resultado;
      const mensagemErro: string = dados.resultado_str;
      const resultado: any = dados.results;

      // Guardas
      if (erro === 'ERR-BD') {
        return alert(mensagemErro);
      }

      // Logica
      this.router.navigate(['/avaliacao-filmes'], {
        queryParams: {
          filmes: JSON.stringify(resultado)
        }
      });

    });
  }

  onSubmit(form: NgForm): void {

    this.formValid = form.valid;
    this.submit = true;

    if (this.isFormValid) {
      this.enviarDadosCadastrados(this.usuario);
    }

  }

  get isFormValid(): boolean {
    return (this.formValid && this.usuario.idGeneros.length >= 3);
  }

  carregaGeneros() {

    const url = `${this.configUrl.baseUrl}genero/`;

    this.http.get(url).subscribe((dados: Array<Genero>) => {

      dados.forEach((dado: Genero) => {
        this.isGeneros.push(dado);
      });

    }, error => {
      console.log('Erro ao Carregar Generos', error);
    });
  }

}
