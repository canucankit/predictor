import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { NationalityPredictor } from './nationality-predictor.interface';

@Injectable()
export class NationalityPredictorService {
  constructor(private httpService: HttpService) {}

  public getPredictionByName(
    name: string,
  ): Observable<AxiosResponse<NationalityPredictor>> {
    const url = `https://api.nationalize.io/?name=${name}`;
    
    return this.httpService.get(url).pipe(map(({ data }) => data));  
  }
}
