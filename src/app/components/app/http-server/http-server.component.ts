import {Component} from '@angular/core';
import {CarsService} from '../../services/cars.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-http-server',
  templateUrl: './http-server.component.html',
  styleUrls: ['./http-server.component.css']
})
export class HttpServerComponent {
  cars = [];

  constructor(private carsService: CarsService) {
  }

  // это Observeble объект. Он является stream.
  // не него можно подписаться
  // выполним по завершению стрима callBack функцию
  loadCars() {
     this.carsService
      .getCars()
      .subscribe((data) => {
        this.cars = data;
      });
  }
}
