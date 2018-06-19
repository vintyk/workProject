import {Component} from '@angular/core';
import { MageComponent } from '../mage/mage.component';
import { AddMageComponent } from '../add-mage/add-mage.component';

@Component({
  selector: 'app-mages',
  templateUrl: './mages.component.html',
  styleUrls: ['./mages.component.css']
})
export class MagesComponent {
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

  addMageToList(mageName: string) {
    this.mages.push({
      name: mageName,
      isDead: false
    });
  }
}
