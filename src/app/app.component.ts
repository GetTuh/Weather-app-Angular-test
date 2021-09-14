import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:any = 'MachineTestAngular';
  weatherData:any
  constructor(){
    let city ='tokyo'
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${environment.OPENWEATHER_API_KEY}`
    const weatherData=async(city:string)=>{
      this.weatherData = await (await fetch(url)).json()
    }
    weatherData('a')
  }
}
