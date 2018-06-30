import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CarsService {
  constructor(private http: HttpClient) {}

  getCars(): Observable<any> {
    // возвращает Observeble объект
    return this.http.get('http://localhost:3000/cars');
  }

  addCar(carName: string) {
    const data = {
      name: carName,
      color: 'blue'
    };
    return this.http.post('http://localhost:3000/cars', data);
  }

  changeColor (car: any, color: string) {
    car.color = color;
    // put изменение какого-то объекта
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car);
  }

  deleteCar (car: any) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`);
  }
}
