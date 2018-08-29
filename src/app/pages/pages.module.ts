import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvaliacaoFilmesComponent } from './avaliacao-filmes/avaliacao-filmes.component';
import { CadastroModule } from './cadastro/cadastro.module';
import { LoginComponent } from './login/login.component';
import { MenuModule } from './menu/menu.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing.module';


@NgModule({
  imports: [
    FormsModule,
    MenuModule,
    CadastroModule,
    PagesRoutingModule
  ],
  declarations: [
    PagesComponent,
    LoginComponent,
    AvaliacaoFilmesComponent
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
