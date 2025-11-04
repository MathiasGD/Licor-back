import { Module } from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';
import { IngredientesController } from './ingredientes.controller';
import { Ingrediente } from './ingrediente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ingrediente])],
  providers: [IngredientesService],
  controllers: [IngredientesController],
})
export class IngredientesModule {}
