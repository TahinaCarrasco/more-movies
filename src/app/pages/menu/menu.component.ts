import { Component, OnInit } from '@angular/core';
import { Usuario } from './../models/usuario.model';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  exibir = false;
  usuario: Usuario;

  constructor() { }

  ngOnInit() {
    if (this.usuario) {
      this.exibir = true;
    }
  }

  buscaFilmes(textoParaBusca: string) {
    console.log('vai voltar os filmes', textoParaBusca);
  }

}
