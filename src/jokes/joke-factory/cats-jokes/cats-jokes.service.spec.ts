import { Test, TestingModule } from '@nestjs/testing';
import { CatsJokesService } from './cats-jokes.service';

describe('CatsJokesService', () => {
  let service: CatsJokesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsJokesService],
    }).compile();

    service = module.get<CatsJokesService>(CatsJokesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
