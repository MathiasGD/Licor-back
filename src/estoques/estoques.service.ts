import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estoque } from './estoque.entity';
import { Repository } from 'typeorm';
import { PostEstoqueDto } from './dto/post/post-estoque.dto';
import { Ingrediente } from 'src/ingredientes/ingrediente.entity';

@Injectable()
export class EstoquesService {
  constructor(
    @InjectRepository(Estoque)
    private readonly estoquesRepository: Repository<Estoque>,
    @InjectRepository(Ingrediente)
    private readonly ingredienteRepository: Repository<Ingrediente>,
  ) {}

  async getEstoques(): Promise<Estoque[]> {
    return await this.estoquesRepository.find({
      relations: ['ingrediente'],
    });
  }

  async postEstoque(data: PostEstoqueDto) {
    const ingrediente = await this.ingredienteRepository.findOne({
      where: { id: data.ingredienteId },
    });

    if (!ingrediente)
      throw new Error(
        `Ingrediente com id ${data.ingredienteId} não encontrado`,
      );

    const estoqueExistente = await this.estoquesRepository.findOne({
      where: { ingrediente },
    });

    await this.estoquesRepository.save({
      id: estoqueExistente ? estoqueExistente.id : undefined,
      quantidadeDisponivel: data.quantidadeDisponivel,
      ingrediente,
    });
  }
}
