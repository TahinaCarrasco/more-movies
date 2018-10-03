import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';
import { AvaliacaoFilmesComponent } from './avaliacao-filmes.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StarRatingModule
  ],
  declarations: [
    AvaliacaoFilmesComponent
  ],
  exports: [AvaliacaoFilmesComponent],
})
export class AvaliacaoFilmesModule { }
