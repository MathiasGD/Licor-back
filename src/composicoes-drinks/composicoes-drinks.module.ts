import { Module } from '@nestjs/common';
import { ComposicoesDrinksService } from './composicoes-drinks.service';
import { ComposicoesDrinksController } from './composicoes-drinks.controller';

@Module({
  providers: [ComposicoesDrinksService],
  controllers: [ComposicoesDrinksController]
})
export class ComposicoesDrinksModule {}
