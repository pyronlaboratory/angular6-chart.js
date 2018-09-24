import { TestBed } from '@angular/core/testing';

import { WeatherApiDataService } from './weather-api-data.service';

describe('WeatherApiDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherApiDataService = TestBed.get(WeatherApiDataService);
    expect(service).toBeTruthy();
  });
});
