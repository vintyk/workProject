import {Component} from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Array<{ name: string, age: number }> = [{
    name: 'Aragorn',
    age: 87
  },
    {
      name: 'Леголас',
      age: 2931
    },
    {
      name: 'Гимли',
      age: 139
    },
    {
      name: 'Трандуил',
      age: 6572
    }];

  updateCarList(hero: {name: string, age: number}) {
    this.heroes.push(hero);
  }
}
