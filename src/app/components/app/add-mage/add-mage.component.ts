import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-mage',
  templateUrl: './add-mage.component.html',
  styleUrls: ['./add-mage.component.css']
})
export class AddMageComponent {
  @Output() onMageAdd = new EventEmitter<String>();
  mageName = '';

  addMage() {
    this.onMageAdd.emit(this.mageName);
    this.mageName;
  }

}
