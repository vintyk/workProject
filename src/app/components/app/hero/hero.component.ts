import {Component, ContentChild, ElementRef, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input('heroItem') hero: { name: string, age: number };
  @Input('heroName') name: string;
  @ContentChild('heroHeading') heroHeading: ElementRef;

  constructor() {
    console.log('Vinty constructor');
  }

  ngOnInit() {
    console.log('Создался ngOnInit()');
  }


}
