import { JokeType } from '../jokes.interface';
import { DogsJokesService } from './dogs-jokes/dogs-jokes.service';
import { CatsJokesService } from './cats-jokes/cats-jokes.service';
import { JokesService } from '../jokes.service';
import { LionsJokesService } from './lions-jokes/lions-jokes.service';

export class JokesFactory {
  create(joke: JokeType): JokesService {
    switch (joke) {
      case 'dogs':
        return new DogsJokesService();

      case 'cats':
        return new CatsJokesService();

      case 'lions':
        return new LionsJokesService();

      default:
        throw new Error('Joke not found');
    }
  }
}
