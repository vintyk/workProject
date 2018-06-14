import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent {
  heroName = '';
  heroAge = 0;
  @Output() heroEmiter = new EventEmitter<{ name: string, age: number }>();

  addHero() {
    this.heroEmiter.emit({
      name: this.heroName,
      age: this.heroAge
    });
    this.heroName = '';
    this.heroAge = 0;
  }
}
