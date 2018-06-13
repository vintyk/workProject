import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import {Form, FormsModule} from '@angular/forms';
import { Car2Component } from './car2/car2.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    Car2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
