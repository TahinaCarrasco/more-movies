import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {

    if (!this.usuario) {
      this.usuario = new Usuario();
    }
  }

  onSubmit(form: NgForm): void {

    if (form.valid && !this.postLogin()) {
      this.postLogin();
      this.router.navigate(['/home']);
    }
  }

  postLogin(): Object {

    const url = `https://more-movies.000webhostapp.com/ajax/login.php`;

    // Solução temporaria até a API trazer as repostas certas e se sucesses ou não, apresentei no alert para ficar mais visivel.
    return this.http.post(url, JSON.stringify(this.usuario)).subscribe(response => alert(JSON.stringify(response)));
  }

}
