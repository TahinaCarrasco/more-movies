import { IsDate, IsEmail, IsString } from 'class-validator';

export class Usuario {

  @IsString()
  nomeCompleto: string;

  @IsEmail()
  email: string;

  @IsString()
  sexo: string;

  @IsDate()
  dtNascimento: Date;

  @IsString()
  login: string;

  @IsString()
  senha: string;

}
