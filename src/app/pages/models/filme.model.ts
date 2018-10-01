import { IsString } from 'class-validator';

export class Filme {

  @IsString()
  title: string;

  @IsString()
  overview: string;

  poster_path: string;
}
