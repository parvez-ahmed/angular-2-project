import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../weather-item/weather-data';
import { WEATHER_LIST } from './weather-list';
import { DataService } from '../data.service'; 
@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  weatherItems:WeatherData[];

  constructor(public data:DataService) { 
    
  }

  ngOnInit() {
    this.weatherItems=this.data.getWeatherItem()

  }

}
