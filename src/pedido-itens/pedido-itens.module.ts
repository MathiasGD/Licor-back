import { Module } from '@nestjs/common';
import { PedidoItensService } from './pedido-itens.service';
import { PedidoItensController } from './pedido-itens.controller';
import { PedidoItem } from './pedido-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoItem])],
  providers: [PedidoItensService],
  controllers: [PedidoItensController],
})
export class PedidoItensModule {}
