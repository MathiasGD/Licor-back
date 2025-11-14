import { Module } from '@nestjs/common';
import { EstoquesService } from './estoques.service';
import { EstoquesController } from './estoques.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estoque } from './estoque.entity';
import { Ingrediente } from 'src/ingredientes/ingrediente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estoque, Ingrediente])],
  providers: [EstoquesService],
  controllers: [EstoquesController],
})
export class EstoquesModule {}
