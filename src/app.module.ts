import { Module } from '@nestjs/common';
import { JokesModule } from './jokes/jokes.module';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    JokesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
