import {Component, OnInit} from '@angular/core';
import {CarsServiceRoute} from '../../services/cars.service.route';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {
  cars = [];

  constructor(private carsService: CarsServiceRoute) {
  }

  ngOnInit() {
    this.cars = this.carsService.cars;
  }

}
