import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PostIngredienteDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  descricao?: string;
}
