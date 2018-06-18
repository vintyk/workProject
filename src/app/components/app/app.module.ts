import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import {Form, FormsModule} from '@angular/forms';
import { Cars2Component } from './cars2/cars2.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { AddOrcComponent } from './add-orc/add-orc.component';
import { BackgroundDirective } from '../directives/background.directive';
import {BackgroundRenderDirective} from '../directives/backgroundRender.directive';
import { PipesComponent } from './pipes/pipes.component';
import { PipesCustomComponent } from './pipes-custom/pipes-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    Cars2Component,
    HeroesComponent,
    HeroComponent,
    AddHeroComponent,
    AddOrcComponent,
    BackgroundDirective,
    BackgroundRenderDirective,
    PipesComponent,
    PipesCustomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
