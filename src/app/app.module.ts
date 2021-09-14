import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { CityPickerComponent } from './city-picker/city-picker.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    CityPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, 
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
