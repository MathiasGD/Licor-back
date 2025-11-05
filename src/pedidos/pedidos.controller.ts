import { Body, Controller, Get, Post } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PostPedidoDto } from './dto/post/post-pedido.dto';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Get('pedidos')
  getPedidos() {
    return this.pedidosService.getPedidos();
  }

  @Post('pedido')
  postPedido(@Body() data: PostPedidoDto) {
    return this.pedidosService.postPedido(data);
  }
}
