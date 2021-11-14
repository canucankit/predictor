import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NationalityPredictorController } from './nationality-predictor.controller';
import { NationalityPredictorService } from './nationality-predictor.service';

@Module({
  imports: [HttpModule],
  controllers: [NationalityPredictorController],
  providers: [NationalityPredictorService],
})
export class NationalityPredictorModule {}
