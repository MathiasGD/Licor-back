import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Drink } from './drink.entity';
import { GetDrinkDto } from './dto/get/get-drink.dto';
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

  async findAll(): Promise<Drink[]> {
    return await this.drinksRepository.find();
  }

  async findOneById(params: GetDrinkDto) {
    return await this.drinksRepository.findOne({
      where: { id: params.id },
      relations: ['composicao', 'composicao.ingrediente'],
    });
  }

  async save(data: PostDrinkDto) {
    const { nome, modoPreparo, precoBase, descricao, composicao } = data;

    const drinkInstance = this.drinksRepository.create({
      nome,
      modoPreparo,
      precoBase,
      descricao,
    });

    const drink = await this.drinksRepository.save(drinkInstance);

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

      const composicao = this.composicaoRepository.create({
        drink,
        ingrediente,
        unidadeMedida: c.unidadeMedida,
        quantidade: c.quantidade,
      });

      await this.composicaoRepository.save(composicao);
    }
  }
}
