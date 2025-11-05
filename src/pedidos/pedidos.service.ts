import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './pedido.entity';
import { Repository } from 'typeorm';
import { PostPedidoDto } from './dto/post/post-pedido.dto';
import { Drink } from 'src/drinks/drink.entity';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidosRepository: Repository<Pedido>,
    @InjectRepository(Drink)
    private readonly drinksRepository: Repository<Drink>,
  ) {}

  async getPedidos() {
    return await this.pedidosRepository.find({ relations: ['drink'] });
  }

  async postPedido(data: PostPedidoDto) {
    const drink = await this.drinksRepository.findOne({
      where: { id: data.drinkId },
    });

    if (!drink) throw new Error(`Drink com id ${data.drinkId} não encontrado`);

    await this.pedidosRepository.save({ cliente: data.cliente, drink });
  }
}
