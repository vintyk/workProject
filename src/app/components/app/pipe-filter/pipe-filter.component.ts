import {Component} from '@angular/core';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-pipe-filter',
  templateUrl: './pipe-filter.component.html',
  styleUrls: ['./pipe-filter.component.css']
})
export class PipeFilterComponent {
  searchHero = '';
  heroes = [
    {name: 'Aragorn', descript: 'Боец ближнего боя.'},
    {name: 'Gimly', descript: 'Боец ближнего боя, гном - одним словом.'},
    {name: 'Frodo', descript: 'Не боец. Скорее разведчик.'},
    {name: 'Legolas', descript: 'Боец дальнего боя.'},
    {name: 'Sauron', descript: 'Боец дальнего боя. Маг.'},
    {name: 'Saruman', descript: 'Боец дальнего боя. Маг.'}
  ];

  asyncTitle = Observable.of('Async title 3 second')
    .delay(3000);

  addHero() {
    this.heroes.push({
      name: 'New Hero',
      descript: 'Неопределенный Герой'
    });
  }
}
