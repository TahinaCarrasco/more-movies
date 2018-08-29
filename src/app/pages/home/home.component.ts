import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersResources } from './../../resources/users.resources';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filmes$: Observable<any>;
  constructor(private httpClient: UsersResources) { }

  ngOnInit() {
    this.filmes$ = this.httpClient.get('/users');
  }

}
