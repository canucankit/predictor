import { Test, TestingModule } from '@nestjs/testing';
import { NamePredictorService } from './name-predictor.service';

describe('NamePredictorService', () => {
  let service: NamePredictorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NamePredictorService],
    }).compile();

    service = module.get<NamePredictorService>(NamePredictorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
