// МОДУЛИ
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Form, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

// КОМПОНЕНТЫ
import {AppComponent} from './app.component';
import {CarsComponent} from './cars/cars.component';
import {CarComponent} from './car/car.component';
import {Cars2Component} from './cars2/cars2.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroComponent} from './hero/hero.component';
import {AddHeroComponent} from './add-hero/add-hero.component';
import {AddOrcComponent} from './add-orc/add-orc.component';
import {PipesComponent} from './pipes/pipes.component';
import {PipesCustomComponent} from './pipes-custom/pipes-custom.component';
import {PipeFilterComponent} from './pipe-filter/pipe-filter.component';
import {MageComponent} from './mage/mage.component';
import {AddMageComponent} from './add-mage/add-mage.component';
import {MagesComponent} from './mages/mages.component';
import {FormsComponent} from './forms/forms.component';
import {FormReactiveComponent} from './form-reactive/form-reactive.component';
import {HttpServerComponent} from './http-server/http-server.component';
import {CarsPageComponent} from './cars-page/cars-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {BackgroundDirective} from '../directives/background.directive';
import {BackgroundRenderDirective} from '../directives/backgroundRender.directive';

// СЕРВИСЫ
import {ConsoleService} from '../services/console.service';
import {MagesService} from '../services/mages.service';
import {CarsService} from '../services/cars.service';
import {CarsServiceRoute} from '../services/cars.service.route';

// ПАЙПЫ
import {HeroFilterPipe} from '../pipes/hero.filter.pipe';
import {PowPipe} from '../pipes/pow.pipe';


@NgModule({
  // ДЛЯ КОМПОНЕНТОВ
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
    CarsPageComponent,
    HomePageComponent,

  ],
  // ДЛЯ МОДУЛЕЙ
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  // ДЛЯ СЕРВИСОВ
  providers: [ConsoleService, MagesService, CarsService, CarsServiceRoute],
  bootstrap: [AppComponent]
})
export class AppModule {
}
