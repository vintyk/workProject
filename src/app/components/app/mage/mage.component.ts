import {Component, Input} from '@angular/core';
import {ConsoleService} from '../../services/console.service';

@Component({
  selector: 'app-mage',
  templateUrl: './mage.component.html',
  styleUrls: ['./mage.component.css'],
  // либо тут, либо в NgModule надо зарегестрировать
  // providers: [ConsoleService]
})
export class MageComponent {
  @Input() mage;
  constructor(private consoleService: ConsoleService) {
  }

  getClass() {
    return {
      'list-group-item-success': !this.mage.isDead,
      'list-group-item-danger': this.mage.isDead,
      'list-group-item': true
    };
  }

  onAction(type: string) {
    this.mage.isDead = type === 'kill' ? true : false;
    const service = new ConsoleService();
    if (type === 'kill') {
      this.consoleService.log(`${this.mage.name} был убит недругами! RIP...type = ${type}`);
    } else {
      this.consoleService.log(`${this.mage.name} Воскрес! ну надо  же... type = ${type}`);
    }
  }
}
