import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-cities',
  templateUrl: './selected-cities.component.html',
  styleUrls: ['./selected-cities.component.scss']
})
export class SelectedCitiesComponent implements OnInit {
  @Input() cityName:string | undefined
  constructor() { }
  
  ngOnInit(): void {
  }

}
