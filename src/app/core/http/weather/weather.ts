export interface WeatherOut {
  coord: {
    lon: Number;
    lat: Number;
  };
  weather: [
    {
      id: Number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: Number;
    feels_like: Number;
    temp_min: Number;
    temp_max: Number;
    pressure: Number;
    humidity: Number;
  };
  visibility: Number;
  wind: {
    speed: Number;
    deg: Number;
  };
  clouds: {
    all: Number;
  };
  dt: Number;
  sys: {
    type: Number;
    id: Number;
    message: Number;
    country: string;
    sunrise: Number;
    sunset: Number;
  };
  timezone: Number;
  id: Number;
  name: string;
  cod: Number;
}

export interface WeatherIn {
  q: string;
  appid: any;
  units: string;
}
