import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // filmes$: Observable<any>;
  constructor(
    // private httpClient: UsersResources
  ) { }

  ngOnInit() {
    // this.filmes$ = this.httpClient.get('/users');
  }

}
