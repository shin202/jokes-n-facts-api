import { Injectable } from '@nestjs/common';
import { JokesService } from '../../jokes.service';
import { lionJokes } from './lion-joke.model';

@Injectable()
export class LionsJokesService extends JokesService {
  constructor() {
    super(lionJokes);
  }
}
