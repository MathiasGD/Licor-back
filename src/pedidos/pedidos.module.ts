import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { Pedido } from './pedido.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drink } from 'src/drinks/drink.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido, Drink])],
  providers: [PedidosService],
  controllers: [PedidosController],
})
export class PedidosModule {}
