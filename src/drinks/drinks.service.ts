import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { Drink } from './drink.entity';
import { ComposicaoDrink } from 'src/composicoes-drinks/composicao-drink.entity';
import { Ingrediente } from 'src/ingredientes/ingrediente.entity';
import { PostDrinkDto } from './dto/post/post-drink.dto';

@Injectable()
export class DrinksService {
  constructor(
    @InjectRepository(Drink)
    private readonly drinksRepository: Repository<Drink>,
    @InjectRepository(ComposicaoDrink)
    private readonly composicaoRepository: Repository<ComposicaoDrink>,
    @InjectRepository(Ingrediente)
    private readonly ingredienteRepository: Repository<Ingrediente>,
  ) {}

  async getDrinks(): Promise<Drink[]> {
    return await this.drinksRepository.find({
      relations: ['composicao', 'composicao.ingrediente'],
    });
  }

  async getDrink(params: FindOptionsWhere<Drink>) {
    return await this.drinksRepository.findOne({
      where: params,
      relations: ['composicao', 'composicao.ingrediente'],
    });
  }

  async postDrink(data: PostDrinkDto) {
    const { nome, modoPreparo, precoBase, descricao, composicao } = data;

    const drink = await this.drinksRepository.save({
      nome,
      modoPreparo,
      precoBase,
      descricao,
    });

    if (!drink) {
      throw new NotFoundException(`Falha ao salvar o drink`);
    }

    for (const c of composicao) {
      const ingrediente = await this.ingredienteRepository.findOne({
        where: { id: c.ingredienteId },
      });

      if (!ingrediente)
        throw new NotFoundException(
          `Ingrediente ${c.ingredienteId} não encontrado`,
        );

      await this.composicaoRepository.save({
        drink,
        ingrediente,
        unidadeMedida: c.unidadeMedida,
        quantidade: c.quantidade,
      });
    }
  }
}
