import { IsEnum, IsNotEmpty } from 'class-validator';
import { Joke, JokeType } from '../jokes.interface';

export class GetJokesQuery {
  @IsNotEmpty()
  @IsEnum(Joke)
  type: JokeType;
}
