import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Filme } from '../models/filme.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filmes = new Array<Filme>();

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.carregaFilmes();
  }

  carregaFilmes() {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=3cc731c8c870d7553d87571bd2486f68&language=pt-BR`;

    this.httpClient.get(url).subscribe((dados: any) => {

      dados.results.forEach((item) => {
        this.filmes.push(item);
      });
    });
    console.log('aqui', this.filmes);
  }
}
