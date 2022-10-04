import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { AirbnbApiService } from './airbnb-api.service';

describe('AirbnbApiService', () => {
  let service: AirbnbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: {} }
      ]
    });
    service = TestBed.inject(AirbnbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
