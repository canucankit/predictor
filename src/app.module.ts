import { Module } from '@nestjs/common';
import { NationalityPredictorModule } from './nationality-predictor/nationality-predictor.module';
import { GenderPredictorModule } from './gender-predictor/gender-predictor.module';

@Module({
  imports: [NationalityPredictorModule, GenderPredictorModule,],
})
export class AppModule {}
