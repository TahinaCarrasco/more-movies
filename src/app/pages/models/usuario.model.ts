import { IsArray, IsDate, IsEmail, IsString } from 'class-validator';

export class Usuario {

  @IsString()
  nomeCompleto: string;

  @IsEmail()
  email: string;

  @IsString()
  sexo: string;

  @IsDate()
  dtNasc: Date;

  @IsString()
  login: string;

  @IsString()
  senha: string;

  @IsArray()
  idGeneros: Array<String>;

}
