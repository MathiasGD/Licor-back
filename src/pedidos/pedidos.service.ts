import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido, StatusPedido } from './pedido.entity';
import { Repository } from 'typeorm';
import { PostPedidoDto } from './dto/post/post-pedido.dto';
import { Drink } from 'src/drinks/drink.entity';
import { Estoque } from 'src/estoques/estoque.entity';
import { PostAceitarPedidoDto } from './dto/post/post-aceitar-pedido.dto';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidosRepository: Repository<Pedido>,
    @InjectRepository(Drink)
    private readonly drinksRepository: Repository<Drink>,
    @InjectRepository(Estoque)
    private readonly estoquesRepository: Repository<Estoque>,
  ) {}

  async getPedidos() {
    return await this.pedidosRepository.find({
      relations: [
        'drink',
        'drink.composicao',
        'drink.composicao.ingrediente',
        'drink.composicao.ingrediente.estoque',
      ],
    });
  }

  async postPedido(data: PostPedidoDto) {
    const drink = await this.drinksRepository.findOne({
      where: { id: data.drinkId },
    });

    if (!drink) throw new Error(`Drink com id ${data.drinkId} não encontrado`);

    await this.pedidosRepository.save({ cliente: data.cliente, drink });
  }

  async postAceitarPedido({ pedidoId }: PostAceitarPedidoDto) {
    const pedido = await this.pedidosRepository.findOne({
      where: { id: pedidoId },
      relations: [
        'drink',
        'drink.composicao',
        'drink.composicao.ingrediente',
        'drink.composicao.ingrediente.estoque',
      ],
    });
    if (!pedido) throw new Error(`Pedido com id ${pedidoId} não encontrado`);

    for (const composicao of pedido.drink.composicao) {
      const estoque = composicao.ingrediente.estoque;

      if (!estoque) continue;

      if (estoque.quantidadeDisponivel < composicao.quantidade) {
        throw new Error(
          `Estoque insuficiente para o ingrediente ${composicao.ingrediente.nome}`,
        );
      }

      await this.estoquesRepository.update(estoque.id, {
        quantidadeDisponivel:
          estoque.quantidadeDisponivel - composicao.quantidade,
      });
    }

    await this.pedidosRepository.update(pedidoId, {
      status: StatusPedido.ACEITO,
    });
  }
}
