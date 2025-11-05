import { IsNotEmpty, IsString } from 'class-validator';

export class PostIngredienteDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
}
