import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CarsComponent} from './cars/cars.component';
import {CarComponent} from './car/car.component';
import {Form, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Cars2Component} from './cars2/cars2.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroComponent} from './hero/hero.component';
import {AddHeroComponent} from './add-hero/add-hero.component';
import {AddOrcComponent} from './add-orc/add-orc.component';
import {BackgroundDirective} from '../directives/background.directive';
import {BackgroundRenderDirective} from '../directives/backgroundRender.directive';
import {PipesComponent} from './pipes/pipes.component';
import {PipesCustomComponent} from './pipes-custom/pipes-custom.component';
import {PipeFilterComponent} from './pipe-filter/pipe-filter.component';
import {PowPipe} from '../pipes/pow.pipe';
import {HeroFilterPipe} from '../pipes/hero.filter.pipe';
import { MageComponent } from './mage/mage.component';
import { AddMageComponent } from './add-mage/add-mage.component';
import { MagesComponent } from './mages/mages.component';
import {ConsoleService} from '../services/console.service';
import {MagesService} from '../services/mages.service';
import { FormsComponent } from './forms/forms.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { HttpServerComponent } from './http-server/http-server.component';
import {HttpModule} from '@angular/http';

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
    PipesCustomComponent,
    PowPipe,
    PipeFilterComponent,
    HeroFilterPipe,
    MageComponent,
    AddMageComponent,
    MagesComponent,
    FormsComponent,
    FormReactiveComponent,
    HttpServerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ConsoleService, MagesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
