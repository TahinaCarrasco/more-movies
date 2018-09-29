import { HttpClient, HttpParams } from '@angular/common/http';
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

    if (form.valid) {
      this.postLogin(this.usuario.email, this.usuario.senha);
    }
  }

  postLogin(email: string, senha: string) {

    const url = `http://200.98.71.158:888/tcc/api/usuario/login.php`;
    const params = new HttpParams({ fromString: `login=${email}&senha=${senha}` });

    this.http.get(url, { params }).subscribe(response => {
      (!response) ? this.router.navigate(['/home']) : alert('ruim');
    });
  }

}
