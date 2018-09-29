import { IsString } from 'class-validator';

export class Genero {

  @IsString()
  id_genero?: string;

  @IsString()
  genero?: string;

  @IsString()
  codigo: string;
}
