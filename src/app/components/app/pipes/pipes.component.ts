import {Component} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  name = 'Vinty';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested:
      {
        xyz: 3,
        numbers: [1, 2, 3]
      }
  };
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
}
