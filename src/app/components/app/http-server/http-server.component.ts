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
  cars;
  appTitle;
  carName = '';
  color = [
    'red',
    'blue',
    'green',
    'yellow',
    'grey'
  ];

  constructor(private carsService: CarsService) {
  }

  getRandColor() {
    const num = Math.round(Math.random() * (this.color.length - 1));
    return this.color[num];
  }

  ngOnInit(): void {

    // this.getTitle();
    // console.log(this.getTitle());
    this.appTitle = this.carsService.getAppTitle();
    this.cars = this.carsService.getCars();
    // this.carsService
    //   .getCars()
    //   .subscribe((cars: Car[]) => {
    //     this.cars = cars;
    //   });
  }

  // getTitle() {
  //   this.appTitle = this.carsService
  //     .getAppTitle()
  //     .pipe(map((i: number) => this.appTitle[i]));
  // }

  setNewColor(car: Car) {
    this.carsService.changeColor(car, this.getRandColor())
      .subscribe((data) => {
      });
  }

  // это Observeble объект. Он является stream.
  // на него можно подписаться
  // выполним по завершению стрима callBack функцию
  // this.carsService
  loadCars() {
    this.cars = this.carsService.getCars();
    // .getCars()
    // .subscribe(
    //   (cars: Car[]) => {
    //     this.cars = cars;
    //   },
    //   (error) => {
    //     alert(error);
    //   });
  }

  addCar(carName: string) {
    this.carsService
      .addCar(this.carName)
      .subscribe((car: Car) => {
        this.cars.push(car);
      });
    this.carName = '';
    this.cars = this.carsService.getCars();
  }

  deleteCar(car: Car) {
    this.carsService.deleteCar(car)
      .subscribe((data) => {
        this.cars = this.cars.filter(c => c.id !== car.id);
      });
  }
}
