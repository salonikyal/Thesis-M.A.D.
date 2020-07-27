import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavController} from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
	constructor(public _loc: Geolocation, 
			  public navCtrl: NavController) {}
			  
	locationName= null;
	
	search(){		
		if(this.locationName==null){
			alert("Please enter a city name.")}
		else{
			let navigationExtras: NavigationExtras = {
			  queryParams: {
				locationName: this.locationName
			  }
			};
			return this.navCtrl.navigateForward(['/weather'],navigationExtras); 
		}		
	}
	
	getCurr(){	
		this._loc.getCurrentPosition().then((resp) => {			
			let navigationXtras : NavigationExtras= {
			  queryParams: {
				lat:resp.coords.latitude,
				lon: resp.coords.longitude,
			  }
			};
			this.navCtrl.navigateForward(['/weather'],navigationXtras );		
		}).catch((error) => {
			console.log('Error getting location', error);
			});
	}
}
