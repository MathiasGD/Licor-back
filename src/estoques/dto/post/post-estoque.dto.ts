import { IsNotEmpty, IsNumber } from 'class-validator';

export class PostEstoqueDto {
  @IsNotEmpty()
  @IsNumber()
  ingredienteId: number;

  @IsNotEmpty()
  @IsNumber()
  quantidadeDisponivel: number;
}
