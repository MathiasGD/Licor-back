import { IsNotEmpty, IsNumber } from 'class-validator';

export class PostAceitarPedidoDto {
  @IsNotEmpty()
  @IsNumber()
  pedidoId: number;
}
