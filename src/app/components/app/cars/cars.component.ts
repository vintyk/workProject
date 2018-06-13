import {Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  // isNotDisabled = false;
  carName = '';
  addCarStatus = false;
  inputText = '';
  inputText2 = '';
  inputText3 = '';
  inputText4 = '';
  inputText5 = 'Default Text';
  cars = ['Ford', 'Audi', 'BMW', 'Mersedes'];
  items = [
    {id: 1, name: 'item 1'}
  , {id: 2, name: 'item 2'}
  , {id: 3, name: 'item 3'}
  , {id: 4, name: 'item 4'}];

  constructor() {
    // setTimeout(() => {
    //   this.isNotDisabled = true;
    // }, 4000);
  }

  addCar() {
    this.cars.push(this.carName);
    this.carName = '';
    this.addCarStatus = true;
  }

  // onKeyUp(event: Event) {
  //   this.inputText = (<HTMLInputElement>event.target).value;
  // }

  // onKeyUp2(value: string) {
  //   this.inputText2 = value;
  // }
  //
  // onKeyUpEnter(event) {
  //   if (event.code === 'Enter') {
  //     this.inputText3 = event.target.value;
  //   }
  // }
  //
  // onKeyUpEnterEasy(event) {
  //   this.inputText4 = event.target.value;
  // }
}
