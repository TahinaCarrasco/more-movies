import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import { ConfigService } from './../../resources/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private router: Router,
    private http: HttpClient,
    private configService: ConfigService
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

    const url = `${this.configService.baseUrl}usuario/login.php`;

    const params = new HttpParams({ fromString: `email=${email}&senha=${senha}` });

    this.http.get(url, { params }).subscribe((response: any) => {
      (!response) ? this.router.navigate(['/home']) : alert(response.message);
    });
  }

}
