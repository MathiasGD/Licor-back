import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Drink } from './drink.entity';

@Injectable()
export class DrinksService {
  constructor(
    @InjectRepository(Drink)
    private readonly drinksRepository: Repository<Drink>,
  ) {}

  async findAll(): Promise<Drink[]> {
    return await this.drinksRepository.find();
  }

  async create(drink: Partial<Drink>): Promise<Drink> {
    return await this.drinksRepository.save(drink);
  }
}
