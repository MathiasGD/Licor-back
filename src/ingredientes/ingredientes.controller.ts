import { Body, Controller, Get, Post } from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';
import { PostIngredienteDto } from './dto/post/post-ingrediente.dto';

@Controller('ingredientes')
export class IngredientesController {
  constructor(private readonly ingredientesService: IngredientesService) {}

  @Get('ingredientes')
  getIngredientes() {
    return this.ingredientesService.getIngredientes();
  }

  @Post('ingrediente')
  postIngrediente(@Body() data: PostIngredienteDto) {
    return this.ingredientesService.postIngrediente(data);
  }
}
