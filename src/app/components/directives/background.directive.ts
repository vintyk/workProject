import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appColor]'
})

export class BackgroundDirective implements OnInit {
  // если директиву вставить в h3, то element = h3
  constructor(private element: ElementRef) {
  }

  // в данном случае либо OnImnit или OnDestroy
  ngOnInit() {
    this.element.nativeElement.style.color = 'blue';
  }
}
