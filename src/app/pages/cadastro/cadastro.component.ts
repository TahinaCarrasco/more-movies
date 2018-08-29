import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log('form', form.value);
    console.log('aquiiiiiii', this.usuario);
  }

}
