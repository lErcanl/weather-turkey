import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherOut } from './weather';
describe('WeatherService', () => {
  let service: WeatherService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(WeatherService);
  });
  it('should get the data successfully', () => {
    service
      .getWeather({
        q: 'İstanbul',
        appid: 'a248f220cf48dc6dc7df55bad7dc539e',
        units: 'metric',
      })
      .subscribe((weather: WeatherOut) => {
        expect(weather.name).toEqual('İstanbul');
      });
  });
});
