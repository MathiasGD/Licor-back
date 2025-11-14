import { IsNotEmpty, IsString } from 'class-validator';

export class GetUsuarioDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;
}
