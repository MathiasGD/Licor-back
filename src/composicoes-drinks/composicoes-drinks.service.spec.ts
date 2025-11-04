import { Test, TestingModule } from '@nestjs/testing';
import { ComposicoesDrinksService } from './composicoes-drinks.service';

describe('ComposicoesDrinksService', () => {
  let service: ComposicoesDrinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComposicoesDrinksService],
    }).compile();

    service = module.get<ComposicoesDrinksService>(ComposicoesDrinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
