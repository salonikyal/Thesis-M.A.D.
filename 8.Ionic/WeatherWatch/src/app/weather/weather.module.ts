import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WeatherPageRoutingModule } from './weather-routing.module';
import { WeatherPage } from './weather.page';
import { WeatherProvider } from '../../providers/weather';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherPageRoutingModule,
	HttpClientModule
  ],
  providers: [WeatherProvider, Geolocation],
  declarations: [WeatherPage]
})
export class WeatherPageModule {}
