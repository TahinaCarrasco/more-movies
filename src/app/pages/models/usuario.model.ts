import { IsArray, IsDate, IsEmail, IsString } from 'class-validator';

export class Usuario {

  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  sexo: string;

  @IsDate()
  dt_nasc: Date;

  @IsString()
  login: string;

  @IsString()
  senha: string;

  @IsArray()
  idGeneros: Array<String>;

}
