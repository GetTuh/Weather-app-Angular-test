import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { CityPickerComponent } from './city-picker/city-picker.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatCardModule} from '@angular/material/card';
import { SelectedCitiesComponent } from './selected-cities/selected-cities.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    CityPickerComponent,
    SelectedCitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, 
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
