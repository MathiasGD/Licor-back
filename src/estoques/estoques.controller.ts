import { Body, Controller, Get, Post } from '@nestjs/common';
import { EstoquesService } from './estoques.service';
import { PostEstoqueDto } from './dto/post/post-estoque.dto';

@Controller('estoques')
export class EstoquesController {
  constructor(private readonly estoquesService: EstoquesService) {}

  @Get('estoques')
  getEstoques() {
    return this.estoquesService.getEstoques();
  }

  @Post('estoque')
  postEstoque(@Body() data: PostEstoqueDto) {
    return this.estoquesService.postEstoque(data);
  }
}
