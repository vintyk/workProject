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
}
