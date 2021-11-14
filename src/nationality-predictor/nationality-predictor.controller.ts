import { Controller, Get, Param } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { NationalityPredictor } from './nationality-predictor.interface';
import { NationalityPredictorService } from './nationality-predictor.service';

@Controller('nationality-predictor')
export class NationalityPredictorController {
  constructor(
    private nationalityPredictorService: NationalityPredictorService,
  ) {}

  @Get(':name')
  getNamePrediction(
    @Param('name') name: string,
  ): Observable<AxiosResponse<NationalityPredictor>> {
    return this.nationalityPredictorService.getPredictionByName(name);
  }
}
