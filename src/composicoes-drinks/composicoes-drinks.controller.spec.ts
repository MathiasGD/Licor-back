import { Test, TestingModule } from '@nestjs/testing';
import { ComposicoesDrinksController } from './composicoes-drinks.controller';

describe('ComposicoesDrinksController', () => {
  let controller: ComposicoesDrinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComposicoesDrinksController],
    }).compile();

    controller = module.get<ComposicoesDrinksController>(ComposicoesDrinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
