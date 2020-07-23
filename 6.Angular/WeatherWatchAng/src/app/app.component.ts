import { Component } from '@angular/core';
import {WeatherService} from './service/weather.service';
import {LocationService} from './service/location.service';
import {PwaService} from './service/pwa.service';
import * as moment from 'moment';
'use strict';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherWatchAng';
  constructor(private _weather: WeatherService) { }
  locationName= '';
  city='';
  date='';
  temp='';
  des='';
  icon='';
  feels_like='';
  humidity='';
  wind_speed='';
  pressure='';
  sunrise='';
  sunset='';
  humidity_label='';
  feels_like_label='';
  wind_speed_label='';
  pressure_label='';
  sunrise_label='';
  sunset_label='';
  loaded = true;
  
    search() {
    this.loaded = true;
		
        this._weather.getCurrentWeather('q='+this.locationName).subscribe((data: any) => {
          if ( data != null ) {
			console.log(data);
			this.loaded = false;
			this.city=this.locationName.toUpperCase();
			this.date=moment.unix(data.dt).format('hh:mm a');
			this.temp=data.main.temp+'°C';
			this.des=data.weather[0].description.toUpperCase();
			this.icon='assets/icons/icons/'+data.weather[0].icon+'.png';
			console.log(this.icon);
			 
			this.humidity_label='Humidity';
			this.feels_like_label='Feels Like';
			this.wind_speed_label='Wind Speed';
			this.pressure_label='Pressure';
			this.sunrise_label='Sunrise';
			this.sunset_label='Sunset';
			
			this.feels_like=data.main.feels_like+'°C';
			this.humidity=data.main.humidity+'%';
			this.wind_speed=data.wind.speed+'m/s';
			this.pressure=data.main.pressure+' hpa';
			this.sunrise=moment.unix(data.sys.sunrise).format('hh:mm a');
			this.sunset=moment.unix(data.sys.sunset).format('hh:mm a');
           }
        }, err => { 
			alert("Please enter a valid city name.");});
	}
	
}
