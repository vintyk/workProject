import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class CarsService {
  constructor(
    private http: HttpClient
  ) {
  }

  getCars(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    // возвращает Observeble объект
    return this.http
      .get('http://localhost:3000/cars', {headers: headers})
      .catch((response: Response) => {
        return Observable.throwError('Сервер не доступен. Попробуйте позже');
      });
  }

  getAppTitle() {
    return this.http
      .get('http://localhost:3000/title');
  }

  addCar(carName: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    const data = {
      name: carName,
      color: 'blue'
    };
    return this.http.post('http://localhost:3000/cars', data, {headers: headers});
  }

  changeColor(car: any, color: string) {
    car.color = color;
    // put изменение какого-то объекта
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car);
  }

  deleteCar(car: any) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`);
  }


}
