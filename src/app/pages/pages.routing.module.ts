import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from 'src/app/pages/cadastro/cadastro.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { AvaliacaoFilmesComponent } from './avaliacao-filmes/avaliacao-filmes.component';
import { HomeComponent } from './home/home.component';


const pageRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'avaliacao-filmes',
    component: AvaliacaoFilmesComponent
  },
  {
    path: 'recomendacoes',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(pageRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
