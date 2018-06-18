import {Component} from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-cars2',
  templateUrl: './cars2.component.html',
  styleUrls: ['./cars2.component.css']
})
export class Cars2Component {
  carName = '';
  cars = ['Renault', 'Opel', 'Nissan', 'Honda', 'Lada'];

  setBigCarText(car: string) {
    return car.length > 4 ? true : false;
  }

  dates = [
    new Date,
    new Date(2015, 2, 3).toDateString(),
    new Date(2015, 3, 4).toDateString(),
    new Date(2011, 2, 4).toDateString(),
    new Date(2017, 4, 6).toDateString(),
    new Date(2000, 1, 7).toDateString()
  ];
}
