import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mage',
  templateUrl: './mage.component.html',
  styleUrls: ['./mage.component.css']
})
export class MageComponent {
  @Input() mage;

  getClass() {
    return {
      'list-group-item-success': !this.mage.isDead,
      'list-group-item-danger': this.mage.isDead,
      'list-group-item': true
    };
  }

  onAction(type: string) {
    this.mage.isDead = type === 'kill' ? true : false;
  }
}
