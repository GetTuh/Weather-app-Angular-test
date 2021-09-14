import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CityPickerComponent } from './city-picker/city-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    CityPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
