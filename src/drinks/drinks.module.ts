import { Module } from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { DrinksController } from './drinks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drink } from './drink.entity';
import { Ingrediente } from 'src/ingredientes/ingrediente.entity';
import { ComposicaoDrink } from 'src/composicoes-drinks/composicao-drink.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Drink, ComposicaoDrink, Ingrediente])],
  providers: [DrinksService],
  controllers: [DrinksController],
})
export class DrinksModule {}
