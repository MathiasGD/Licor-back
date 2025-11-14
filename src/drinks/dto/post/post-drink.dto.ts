import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class ComposicaoDto {
  @IsNotEmpty()
  @IsNumber()
  ingredienteId: number;

  @IsNotEmpty()
  @IsString()
  unidadeMedida: string;

  @IsNotEmpty()
  @IsNumber()
  quantidade: number;
}

export class PostDrinkDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  modoPreparo: string;

  @IsNotEmpty()
  @IsNumber()
  precoBase: number;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ComposicaoDto)
  composicao: ComposicaoDto[];
}
