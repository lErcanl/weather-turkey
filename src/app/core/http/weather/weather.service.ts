import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherIn, WeatherOut } from './weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  public url = 'https://api.openweathermap.org/data/2.5/weather';
  constructor(private http: HttpClient) {}

  getWeather(params: WeatherIn): Observable<WeatherOut> {
    let options = {
      params: new HttpParams()
        .set('q', params.q)
        .set('appid', params.appid)
        .set('units', params.units)
        .set('lang', 'tr'),
    };

    return this.http.get<WeatherOut>(this.url, options);
  }
}
