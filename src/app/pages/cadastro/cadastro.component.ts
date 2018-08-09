import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
