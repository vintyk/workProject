import {Component} from '@angular/core';
import {MagesService} from '../../services/mages.service';

@Component({
  selector: 'app-add-mage',
  templateUrl: './add-mage.component.html',
  styleUrls: ['./add-mage.component.css'],
})
export class AddMageComponent {
  mageName = '';

  constructor(private service: MagesService) {
  }

  addMage() {
    this.service.addMage(this.mageName);
    this.mageName;
  }

}
