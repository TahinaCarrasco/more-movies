import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/pages/models/filme.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-avaliacao-filmes',
  templateUrl: './avaliacao-filmes.component.html',
  styleUrls: ['./avaliacao-filmes.component.scss']
})
export class AvaliacaoFilmesComponent implements OnInit {

  filmes$ = new Observable<Array<Filme>>();

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const { filmes } = this.activatedRoute.snapshot.queryParams;
    this.filmes$ = this.carregaFilmes(filmes ? JSON.parse(filmes) : null);
  }

  carregaFilmes(filmes: Array<any>): Observable<Array<Filme>> {
    if (filmes && filmes.length) {
      return of(filmes);
    }
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=3cc731c8c870d7553d87571bd2486f68&language=pt-BR`;
    return this.httpClient.get<Array<Filme>>(url)
      .pipe(
        map((response: { results: [] }) => response.results)
      )
  }

  sanitizeUrls(url: string): string {
    const remoteUrl = 'https://image.tmdb.org/t/p/w200/'
    return `${remoteUrl}${url.substr(0, 1) === '/' ? url.substr(1, url.length) : url}`;
  }

}
