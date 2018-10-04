import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/forms';
import { Router } from '@angular/router';
import { Validator } from 'class-validator';
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
    private router: Router
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
    const url = `http://200.98.71.158:888/tcc/api/usuario/criar.php`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 123456'
      })
    };


    this.http.post<{ results: Array<T> }>(url, JSON.stringify(usuario), httpOptions)
      .subscribe(dados => this.router.navigate(['/avaliacao-filmes', {
        queryParams: {
          filmes: JSON.stringify(dados.results)
        }
      }]));
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

    const url = `http://200.98.71.158:888/tcc/api/genero/`;

    this.http.get(url).subscribe((dados: Array<Genero>) => {

      dados.forEach((dado: Genero) => {
        this.isGeneros.push(dado);
      });

    }, error => {
      console.log('Erro ao Carregar Generos', error);
    });
  }

}
