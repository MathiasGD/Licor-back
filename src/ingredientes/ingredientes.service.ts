import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingrediente } from './ingrediente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientesService {
  constructor(
    @InjectRepository(Ingrediente)
    private readonly ingredienteRepository: Repository<Ingrediente>,
  ) {}

  async getIngredientes(): Promise<Ingrediente[]> {
    return await this.ingredienteRepository.find();
  }

  async postIngrediente(ingrediente: Partial<Ingrediente>) {
    await this.ingredienteRepository.save(ingrediente);
  }
}
