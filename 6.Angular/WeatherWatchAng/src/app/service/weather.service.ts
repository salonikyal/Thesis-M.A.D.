import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class WeatherService {

  constructor(private _httpClient: HttpClient) { }


  getCurrentWeather(cityname: string) {	
    return this._httpClient.get('http://api.openweathermap.org/data/2.5/weather?'+cityname+'&appid=e25a68c009aa630161457691d6f0a5a6&units=metric');
  }

}
