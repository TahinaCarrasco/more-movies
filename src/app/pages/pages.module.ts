import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModule } from 'src/app/pages/login/login.module';
import { AvaliacaoFilmesModule } from './avaliacao-filmes/avaliacao-filmes.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { HomeModule } from './home/home.module';
import { MenuModule } from './menu/menu.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing.module';



@NgModule({
  imports: [
    FormsModule,
    MenuModule,
    CadastroModule,
    PagesRoutingModule,
    AvaliacaoFilmesModule,
    LoginModule,
    HomeModule
  ],
  declarations: [
    PagesComponent,
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
