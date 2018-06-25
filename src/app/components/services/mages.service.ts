import { ConsoleService } from './console.service';
import {Injectable} from '@angular/core';

// без декораторов - не работает инджект с помощью конструктора
@Injectable()
export class MagesService {

  constructor(private consoleService: ConsoleService) {
  }

  mages = [
    {
      name: 'Gendalf',
      isDead: false
    },
    {
      name: 'Sauron',
      isDead: true
    },
    {
      name: 'Saruman',
      isDead: false
    }
  ];

  addMage(name: string) {
    this.mages.push({name: name, isDead: false});
    this.consoleService.log(`Герой ${name} был добавлен.`);
  }
}
