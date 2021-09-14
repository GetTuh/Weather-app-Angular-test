import { Component, Input ,OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
  
})

export class InfoBoxComponent implements OnChanges {
  info:any
  main:string | undefined
  icon:string|undefined
  @Input() weather:any
  ngOnChanges(changes:SimpleChanges){
      this.info=this.weather
      this.main=this.adjective(this.info.weather[0].main)
      this.icon=`http://openweathermap.org/img/wn/${this.info.weather[0].icon}.png`
  }
  adjective=(main:string)=>{
    switch (main.toLowerCase()) {
      case 'fog': return 'foggy';
      case 'clear': return 'bright';
      case 'rain': return 'rainy';
      case 'sun': return 'sunny';
      case 'snow': return 'snowy';
      case 'clouds':return 'cloudy'
      default:return main
    }
  }
  
  
}

