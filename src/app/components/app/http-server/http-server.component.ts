import { Component } from '@angular/core';

@Component({
  selector: 'app-http-server',
  templateUrl: './http-server.component.html',
  styleUrls: ['./http-server.component.css']
})
export class HttpServerComponent {
  cars = [
    {
      name: 'Ford',
      color: 'white',
      id: 1
    }
  ];
}
