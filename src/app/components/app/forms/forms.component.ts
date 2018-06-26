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
  @ViewChild('form') form: NgForm;

  isSubmite = false;
  formData = '';
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

  submitForm() {
    console.log('Submit OK!', this.form);
    this.formData = this.form.value;
  }

  isSubmited() {
    this.isSubmite = true;
  }

  addRandEmail() {
    const randEmail = 'Test@Gmail.com';
    this.form.form.patchValue({
      userPasswordGroup: {
        email: randEmail,
      }
    });
    // setValue обновит все заполненные поля.
    // Придется заполнять все заново.
    // this.form.setValue({
    //   userPasswordGroup: {
    //     email: randEmail,
    //     pass: ''
    //   },
    //   country: '',
    //   answer: ''
    // });
  }
}
