import { Module } from '@nestjs/common';
import { EstoquesService } from './estoques.service';
import { EstoquesController } from './estoques.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estoque } from './estoque.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estoque])],
  providers: [EstoquesService],
  controllers: [EstoquesController],
})
export class EstoquesModule {}
