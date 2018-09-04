import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvaliacaoFilmesComponent } from './avaliacao-filmes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AvaliacaoFilmesComponent
  ],
  exports: [AvaliacaoFilmesComponent],
})
export class AvaliacaoFilmesModule { }
