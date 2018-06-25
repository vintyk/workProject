import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  // styles: [`
  //   input.ng-invalid.ng-touched {
  //     border: 1px solid lightcoral;
  //   }
  // `]
})
export class FormsComponent {
  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  countries = [{
    val: 'by',
    text: 'Беларусь'
  },
    {
      val: 'ru',
      text: 'Россия'
    },
    {
      val: 'us',
      text: 'USA'
    }
  ];

  defaultAnswer = 'no';
  defaultCountry = '';

  submitForm(form: NgForm) {
    console.log('Submit OK!', form);
  }
}
