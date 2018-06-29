import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];
  // тип реактивной формы должен быть FormGroup
  form: FormGroup;
  charsCountPass = 5;

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        // вызывает 2 валидатора. поэтому в массиве. Один обязательность заполненного поля,
        // второй - указание на то, что тут e-mail
        email: new FormControl('', [Validators.required, Validators.email], this.checkForEmail),
        // вызвали валидатор без его вызова - без ()
        // мы потеряли контекст - this - его надо забиндить
        pass: new FormControl('', [Validators.required, this.checkForLength.bind(this)])
      }),
      country: new FormControl('ru'),
      answer: new FormControl('no')
    });
  }

  onSubmit() {
    console.log('Submited!', this.form);
  }

  // кастомный валидатор
  // {'lengthError': true}
  // или null или undefied
  checkForLength(control: FormControl) {
    if (control.value.length < this.charsCountPass) {
      return {
        'lengthError': true
      };
    }
    return null;
  }

  checkForEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@mail.ru') {
          resolve({
            'emailIsUsed': true
          });
        } else {
          resolve(null);
        }
      }, 3000);
    });
  }
}
