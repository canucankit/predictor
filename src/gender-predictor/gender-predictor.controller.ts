import { Controller, Get, Param } from '@nestjs/common';
import { GenderPredictorService } from './gender-predictor.service';

@Controller('gender-predictor')
export class GenderPredictorController {
  constructor(private genderPredictorService: GenderPredictorService) {}

  @Get(':name')
  getGenderPrediction(@Param('name') name: string) {
    return this.genderPredictorService.getGenderByName(name);
  }
}
