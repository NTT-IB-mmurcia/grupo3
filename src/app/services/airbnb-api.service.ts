import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detail } from '../models/detail-model';

@Injectable({
  providedIn: 'root'
})
export class AirbnbApiService {

  searchURL = 'https://airbnb-learning-api.herokuapp.com/search';
  detailURL = 'https://airbnb-learning-api.herokuapp.com/listings/';

  constructor(private http: HttpClient) { }

  getDetailById(id : string) : Observable<Detail>{
    return this.http.get<Detail>(this.detailURL + id)
  }

}


