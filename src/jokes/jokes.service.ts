import { Injectable } from '@nestjs/common';
import { random } from '../utils/random';

@Injectable()
export abstract class JokesService {
  private readonly random = random;
  private readonly jokes: string[] = [];

  protected constructor(jokes: string[]) {
    this.jokes = jokes;
  }

  findAll(): string[] {
    return [...new Set(this.jokes)];
  }

  findById(id: number): string {
    return this.jokes[id];
  }

  findRandom(): string {
    const id = this.random(this.jokes.length);
    return this.jokes[id];
  }
}
