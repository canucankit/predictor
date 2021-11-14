import { Test, TestingModule } from '@nestjs/testing';
import { GenderPredictorService } from './gender-predictor.service';

describe('GenderPredictorService', () => {
  let service: GenderPredictorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenderPredictorService],
    }).compile();

    service = module.get<GenderPredictorService>(GenderPredictorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
