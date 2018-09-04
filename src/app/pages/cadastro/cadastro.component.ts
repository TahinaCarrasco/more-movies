import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/forms';
import { Router } from '@angular/router';
import { Validator } from 'class-validator';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  generos = [
    'Ação',
    'Aventura',
    'Comédia',
    'Comédia Romântica',
    'Drama',
    'Ficção Científica'
  ];

  usuario = new Usuario();
  formValid = false;
  submit = false;

  constructor(
    private http: HttpClient,
    private validator: Validator,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.validator.isEmpty(this.usuario.genero)) {
      this.usuario.genero = new Array<String>();
    }
  }

  setSexoSelecionado(sexo: string): void {
    this.usuario.sexo = sexo;
  }

  setGenero(genero: string): void {
    this.usuario.genero.push(genero);
  }

  enviarDadosCadastrados(): void {
    const url = `https://more-movies.000webhostapp.com/ajax/cadastro_save.php`;

    this.http.post(url, JSON.stringify(this.usuario))
      .subscribe(dados => console.log('sucesso', dados));
  }

  onSubmit(form: NgForm): void {
    this.formValid = form.valid;
    this.submit = true;

    if (this.isFormValid) {
      this.enviarDadosCadastrados();
      this.router.navigate(['/avaliacao-filmes']);
    }

  }

  get isFormValid(): boolean {
    return (this.formValid && this.usuario.genero.length >= 3);
  }
}
