import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { GenderPredictor } from './gender-predictor.interface';

@Injectable()
export class GenderPredictorService {
  constructor(private httpService: HttpService) {}

  getGenderByName(name: string): Observable<AxiosResponse<GenderPredictor>> {
    const url = `https://api.genderize.io/?name=${name}`;

    return this.httpService.get(url).pipe(map(({ data }) => data));
  }
}
