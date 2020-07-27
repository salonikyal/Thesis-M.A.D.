import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { WeatherProvider } from '../../providers/weather';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {HttpClientModule} from '@angular/common/http';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
	HttpClientModule
  ],
  providers: [WeatherProvider, Geolocation],
  declarations: [HomePage]
})
export class HomePageModule {}
