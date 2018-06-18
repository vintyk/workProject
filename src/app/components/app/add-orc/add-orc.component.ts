import {Component} from '@angular/core';

@Component({
  selector: 'app-add-orc',
  templateUrl: './add-orc.component.html',
  styleUrls: ['./add-orc.component.css']
})
export class AddOrcComponent {
  headerText = 'Орки - создают свою директиву! ЗА ОРДУ!!!';
  headerRenderText = 'Орки создали рендер!';
  items = [1, 2, 3, 4, 5];
  current = 1;

  onClick(number: number) {
    this.current = number;
  }
}
