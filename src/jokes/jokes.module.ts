import { Module } from '@nestjs/common';
import { JokesFactory } from './joke-factory/jokes.factory';
import { JokesController } from './jokes.controller';

@Module({
  providers: [JokesFactory],
  controllers: [JokesController],
})
export class JokesModule {}
