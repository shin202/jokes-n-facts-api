import { Injectable } from '@nestjs/common';
import { catJokes } from './cat-joke.model';
import { JokesService } from '../../jokes.service';

@Injectable()
export class CatsJokesService extends JokesService {
  constructor() {
    super(catJokes);
  }
}
