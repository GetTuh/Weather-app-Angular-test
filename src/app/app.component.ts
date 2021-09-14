import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {
  title:any = 'MachineTestAngular';
  weatherData:any
  displayNameIfLoaded: any=()=>{try{return this.weatherData.name}catch(e){return 0}}
  cityName:string | undefined='';
  getWeatherData=async(city:string)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${environment.OPENWEATHER_API_KEY}`
    this.weatherData = await (await fetch(url)).json()
  }
  constructor(){

  }
}
