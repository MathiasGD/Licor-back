import { Module } from '@nestjs/common';
import { EquipesService } from './equipes.service';
import { EquipesController } from './equipes.controller';

@Module({
  providers: [EquipesService],
  controllers: [EquipesController]
})
export class EquipesModule {}
