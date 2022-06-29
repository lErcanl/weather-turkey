import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../../../core/http/weather/weather.service';
import { WeatherOut } from '../../../core/http/weather/weather';
@Component({
  selector: 'city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  public cityName = '';
  public cityData: WeatherOut | undefined;
  public units = 'metric';
  public apiKey: any;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private router: Router
  ) {}

  ngOnInit() {
    this.apiKey = sessionStorage.getItem('apiKey');
    if (this.apiKey) {
      this.route.params.subscribe((params) => {
        this.cityName = params['cityName'];
        const requestData = {
          q: this.cityName,
          appid: this.apiKey,
          units: this.units,
        };

        this.weatherService.getWeather(requestData).subscribe((data) => {
          this.cityData = data;
        });
      });
    } else {
      this.router.navigate(['/map']);
    }
  }

  celciusTemp() {
    this.units = 'metric';
    const requestData = {
      q: this.cityName,
      appid: this.apiKey,
      units: this.units,
    };
    this.weatherService.getWeather(requestData).subscribe((data) => {
      this.cityData = data;
    });
  }

  fahrenheitTemp() {
    this.units = 'imperial';
    const requestData = {
      q: this.cityName,
      appid: this.apiKey,
      units: this.units,
    };
    this.weatherService.getWeather(requestData).subscribe((data) => {
      this.cityData = data;
    });
  }
}
