import { Injectable } from '@angular/core';
import { WEATHER_LIST } from './weather-list/weather-list';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { WeatherData } from './weather-item/weather-data';
@Injectable()
export class DataService{
    constructor(private http:Http){

    }
    getWeatherItem(){
        return WEATHER_LIST;
    }
    addWeatherItem(weatherData:WeatherData){
        WEATHER_LIST.push(weatherData);
    }
    searchWeatherItem(cityName:string){
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&APPID=77d9e8b444faa9d7e4ef0e45c5dc2629&units=metric')
        .map( (response:Response) => response.json());
    }
}