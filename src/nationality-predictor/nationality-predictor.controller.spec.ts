import { Test, TestingModule } from '@nestjs/testing';
import { NationalityPredictorController } from './nationality-predictor.controller';

describe('NationalityPredictorController', () => {
  let controller: NationalityPredictorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NationalityPredictorController],
    }).compile();

    controller = module.get<NationalityPredictorController>(NationalityPredictorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
