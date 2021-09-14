import { Component ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-city-picker',
  templateUrl: './city-picker.component.html',
  styleUrls: ['./city-picker.component.scss']
})

export class CityPickerComponent {
  @Output() cityName = new EventEmitter<string>();
  checkWeather=(city:string)=>{
    this.cityName.emit(city)
  }
  
  constructor() {
    
  }


}
