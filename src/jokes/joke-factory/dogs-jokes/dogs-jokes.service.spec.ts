import { Test, TestingModule } from '@nestjs/testing';
import { DogsJokesService } from './dogs-jokes.service';

describe('DogsJokesService', () => {
  let service: DogsJokesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogsJokesService],
    }).compile();

    service = module.get<DogsJokesService>(DogsJokesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
