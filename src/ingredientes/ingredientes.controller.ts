import { Body, Controller, Post } from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';
import { PostIngredienteDto } from './dto/post/post-ingrediente.dto';

@Controller('ingredientes')
export class IngredientesController {
  constructor(private readonly ingredientesService: IngredientesService) {}

  @Post('ingrediente')
  postIngrediente(@Body() data: PostIngredienteDto) {
    return this.ingredientesService.postIngrediente(data);
  }
}
