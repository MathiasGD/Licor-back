import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { GetDrinkDto } from './dto/get/get-drink.dto';
import { PostDrinkDto } from './dto/post/post-drink.dto';

@Controller('drinks')
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}

  @Get('drinks')
  findAll() {
    return this.drinksService.findAll();
  }

  @Get('drink')
  getDrink(@Query() data: GetDrinkDto) {
    return this.drinksService.getDrink(data);
  }

  @Post()
  save(@Body() data: PostDrinkDto) {
    return this.drinksService.save(data);
  }
}
