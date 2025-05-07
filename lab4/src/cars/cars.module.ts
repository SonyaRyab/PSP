import { Module } from '@nestjs/common';
import { StocksService } from './cars.service';
import { StocksController } from './cars.controller';
import { FileService } from '../file.service';
import { Stock } from './entities/cars.entity';

@Module({
  controllers: [StocksController],
  providers: [
    StocksService,
    {
      provide: FileService,
      useFactory: () => new FileService<Stock[]>('assets/stocks.json'),
    },
  ],
})
export class StocksModule {}