import {Component, OnInit} from '@angular/core';
import {CarsService} from '../../services/cars.service';

interface Car {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-http-server',
  templateUrl: './http-server.component.html',
  styleUrls: ['./http-server.component.css']
})
export class HttpServerComponent implements OnInit {
  cars: Car[] = [];
  carName = '';
  color = [
    'red',
    'blue',
    'green',
    'yellow',
    'grey'
  ];

  ngOnInit(): void {
    this.carsService
      .getCars()
      .subscribe((cars: Car[]) => {
        this.cars = cars;
      });
  }

  getRandColor() {
    const num = Math.round(Math.random() * (this.color.length - 1));
    return this.color[num];
  }

  setNewColor(car: Car) {
    this.carsService.changeColor(car, this.getRandColor())
      .subscribe((data) => {
        console.log(data);

      });
  }

  constructor(private carsService: CarsService) {
  }

  // это Observeble объект. Он является stream.
  // на него можно подписаться
  // выполним по завершению стрима callBack функцию
  loadCars() {
    this.carsService
      .getCars()
      .subscribe((cars: Car[]) => {
        this.cars = cars;
      });
  }

  addCar(carName: string) {
    this.carsService
      .addCar(this.carName)
      .subscribe((car: Car) => {
        this.cars.push(car);
        console.log(car);
      });
    this.carName = '';
  }

  deleteCar(car: Car) {
    this.carsService.deleteCar(car)
      .subscribe((data) => {
        console.log(data);
      })
  }
}
