import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WeatherApiDataService } from './weather-api-data.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
