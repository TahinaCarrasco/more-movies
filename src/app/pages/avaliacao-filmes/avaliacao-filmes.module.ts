import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';
import { AvaliacaoFilmesComponent } from './avaliacao-filmes.component';
import { LoadImageDirective } from './directives/loadimage.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StarRatingModule.forRoot()
  ],
  declarations: [
    AvaliacaoFilmesComponent,
    LoadImageDirective
  ],
  exports: [AvaliacaoFilmesComponent],
})
export class AvaliacaoFilmesModule { }
