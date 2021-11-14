import { Test, TestingModule } from '@nestjs/testing';
import { GenderPredictorController } from './gender-predictor.controller';

describe('GenderPredictorController', () => {
  let controller: GenderPredictorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenderPredictorController],
    }).compile();

    controller = module.get<GenderPredictorController>(GenderPredictorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
