import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherProvider } from '../../providers/weather';
import { NavController} from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})

export class WeatherPage implements OnInit {

	constructor(private route: ActivatedRoute, private _weather: WeatherProvider,  public navCtrl: NavController) { } 
	
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
	cloud='';
	wind_dir='';
	humidity_label='';
	feels_like_label='';
	wind_speed_label='';
	pressure_label='';
	sunrise_label='';
	sunset_label='';
	cloud_label='';
	wind_dir_label='';

	ngOnInit() {
		let query : string;
		this.route.queryParams.subscribe(params => {
			let locN = params["locationName"];
			let la = params["lat"];
			let lo = params["lon"];
			if(locN==undefined){
				query = 'lat='+la+'&lon='+lo;				
			}
			else if(lo==undefined||la==undefined){
				query = 'q='+locN;
			}
			else{
				alert("Please try again later. Sorry and Thank you.");
			}
			this._weather.getCurrentWeather(query).subscribe((data: any) => {
				if ( data != null ) {
								
					this.city=data.name.toUpperCase();
					this.date=moment.unix(data.dt).format('hh:mm a');
					this.temp=data.main.temp.toFixed()+'°C';
					this.des=data.weather[0].description.toUpperCase();
					this.icon='assets/icon/icons/'+data.weather[0].icon+'.png';
					console.log(this.icon);
					 
					this.humidity_label='Humidity';
					this.feels_like_label='Feels Like';
					this.wind_speed_label='Wind Speed';
					this.pressure_label='Pressure';
					this.sunrise_label='Sunrise';
					this.sunset_label='Sunset';
					this.cloud_label='Cloud';
					this.wind_dir_label='Wind Direction';

					this.feels_like=data.main.feels_like.toFixed()+'°C';
					this.humidity=data.main.humidity+'%';
					this.wind_speed=data.wind.speed+'m/s';
					this.pressure=data.main.pressure+' hpa';
					this.sunrise=moment.unix(data.sys.sunrise).format('hh:mm a');
					this.sunset=moment.unix(data.sys.sunset).format('hh:mm a');
					this.cloud=data.clouds.all+'%';
					this.wind_dir=data.wind.deg+'°';
					
				}}, err => { 
					alert("Please enter a valid city name OR Turn on the GPS.");	
					this.navCtrl.navigateForward(['/home']);});
		});
	}

}
