import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent {
  heroName = '';
  heroAge = 0;
  @Output('onAddHero') heroEmiter = new EventEmitter<{ name: string, age: number }>();
  @ViewChild('heroHeading') heroHeading: ElementRef;

  constructor() {
    console.log(this.heroHeading);
  }

  addHero() {
    this.heroEmiter.emit({
      name: this.heroName,
      age: this.heroAge
    });
    this.heroName = '';
    this.heroAge = 0;
  }
}
