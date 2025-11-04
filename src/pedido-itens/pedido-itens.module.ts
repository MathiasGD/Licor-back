import { Module } from '@nestjs/common';
import { PedidoItensService } from './pedido-itens.service';
import { PedidoItensController } from './pedido-itens.controller';

@Module({
  providers: [PedidoItensService],
  controllers: [PedidoItensController]
})
export class PedidoItensModule {}
