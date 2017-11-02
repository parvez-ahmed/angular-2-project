import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { WeatherData } from '../weather-item/weather-data';
@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit() {
  }

  onClick(form){
    console.log(form.value.cityName);
    this.data.searchWeatherItem(form.value.cityName).subscribe(
      data => {
        const weatherData = new WeatherData(data.name,data.weather[0].description,data.main.temp);
        this.data.addWeatherItem(weatherData);
      }
    )
  }

}
