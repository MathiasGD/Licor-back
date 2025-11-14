import { Module } from '@nestjs/common';
import { ComposicoesDrinksService } from './composicoes-drinks.service';
import { ComposicoesDrinksController } from './composicoes-drinks.controller';
import { ComposicaoDrink } from './composicao-drink.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ComposicaoDrink])],
  providers: [ComposicoesDrinksService],
  controllers: [ComposicoesDrinksController],
})
export class ComposicoesDrinksModule {}
