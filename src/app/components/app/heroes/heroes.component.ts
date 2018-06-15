import {Component} from '@angular/core';
import {all} from 'codelyzer/walkerFactory/walkerFn';

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

  updateHeroList(hero: { name: string, age: number }) {
    this.heroes.push(hero);
  }

  changeHeroName() {
    this.heroes[0].name = 'новое имя для Героя';
  }

  deleteHero() {
    this.heroes.slice(0, 1);
    console.log(this.heroes);
  }
}
