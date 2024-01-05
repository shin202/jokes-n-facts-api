import { Injectable } from '@nestjs/common';
import { dogJokes } from './dog-joke.model';
import { JokesService } from '../../jokes.service';

@Injectable()
export class DogsJokesService extends JokesService {
  constructor() {
    super(dogJokes);
  }
}
