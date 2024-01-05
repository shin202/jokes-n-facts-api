import { Test, TestingModule } from '@nestjs/testing';
import { LionsJokesService } from './lions-jokes.service';

describe('LionsJokesService', () => {
  let service: LionsJokesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LionsJokesService],
    }).compile();

    service = module.get<LionsJokesService>(LionsJokesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
