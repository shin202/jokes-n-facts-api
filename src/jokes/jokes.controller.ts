import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Query,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { JokesFactory } from './joke-factory/jokes.factory';
import { Response } from 'express';
import { GetJokesQuery } from './dto/get-jokes.query';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokeFactory: JokesFactory) {}

  @Get()
  index(
    @Query(new ValidationPipe({ stopAtFirstError: true }))
    queryParams: GetJokesQuery,
    @Res() res: Response,
  ) {
    const jokesService = this.jokeFactory.create(queryParams.type);
    const jokes: string[] = jokesService.findAll();

    return res.status(HttpStatus.OK).json({
      status: 'success',
      message: `${queryParams.type} jokes retrieved successfully`,
      data: jokes,
    });
  }

  @Get('random')
  random(
    @Query(new ValidationPipe({ stopAtFirstError: true }))
    queryParams: GetJokesQuery,
    @Res() res: Response,
  ) {
    const jokesService = this.jokeFactory.create(queryParams.type);
    const joke: string = jokesService.findRandom();

    return res.status(HttpStatus.OK).json({
      status: 'success',
      message: `Random ${queryParams.type} joke retrieved successfully`,
      data: joke,
    });
  }

  @Get(':id')
  show(
    @Param('id') id: number,
    @Query(new ValidationPipe({ stopAtFirstError: true }))
    queryParams: GetJokesQuery,
    @Res() res: Response,
  ) {
    const jokesService = this.jokeFactory.create(queryParams.type);
    const joke: string = jokesService.findById(id);

    return res.status(HttpStatus.OK).json({
      status: 'success',
      message: `${queryParams.type} joke retrieved successfully`,
      data: joke,
    });
  }
}
