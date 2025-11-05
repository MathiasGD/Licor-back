import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComposicaoDrink } from './composicao-drink.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComposicoesDrinksService {
  constructor(
    @InjectRepository(ComposicaoDrink)
    private readonly composicaoRepository: Repository<ComposicaoDrink>,
  ) {}
}
