import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CadastroModule } from './cadastro/cadastro.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuModule } from './menu/menu.module';
import { PagesComponent } from './pages.component';


@NgModule({
  imports: [
    FormsModule,
    MenuModule,
    CadastroModule
  ],
  declarations: [
    PagesComponent,
    LoginComponent,
    HomeComponent,
  ],
  providers: [],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
