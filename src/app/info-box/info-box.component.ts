import { Component, Input ,OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
  
})
export class InfoBoxComponent implements OnChanges {
  info='loading'
  @Input() weather:any
  ngOnChanges(changes:SimpleChanges){
    try {
      this.info=this.weather.name
    }
    catch(error){
      this.info='loading'
    }
  }
}

