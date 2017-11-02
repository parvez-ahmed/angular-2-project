import { Component, OnInit, Input } from '@angular/core';
import {WeatherData } from './weather-data';
import { DataService } from '../data.service';
@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css'],
  inputs: ['weatherItem']
})
export class WeatherItemComponent implements OnInit {

 
 weatherItem:WeatherData;
  constructor(public data:DataService) { 
    
  }

  ngOnInit() {
  }

   onClick(object){
      let index = this.data.getWeatherItem().indexOf(object);
      this.data.getWeatherItem().splice(index,1);
      console.log(index);
   }
}
