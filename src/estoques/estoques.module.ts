import { Module } from '@nestjs/common';
import { EstoquesService } from './estoques.service';
import { EstoquesController } from './estoques.controller';

@Module({
  providers: [EstoquesService],
  controllers: [EstoquesController]
})
export class EstoquesModule {}
