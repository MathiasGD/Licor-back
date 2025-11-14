import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PostPedidoDto {
  @IsNotEmpty()
  @IsNumber()
  drinkId: number;

  @IsNotEmpty()
  @IsString()
  cliente: string;
}
