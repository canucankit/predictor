import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GenderPredictorController } from './gender-predictor.controller';
import { GenderPredictorService } from './gender-predictor.service';

@Module({
  imports: [HttpModule],
  controllers: [GenderPredictorController],
  providers: [GenderPredictorService]
})
export class GenderPredictorModule {}
