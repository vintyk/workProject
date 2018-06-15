import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRenderColorBW]'
})

// правильнее пользоваться именно таким образом.
// Ибо разные устройства могут не обладать ДОМ
export class BackgroundRenderDirective implements OnInit {
  @Input() hoverColor = 'green';
  @Input() defaultColor = 'transparent';
  @HostBinding('style.background-color') background: string;
  @HostBinding('style.color') color: string;

  // если директиву вставить в h3, то element = h3
  // constructor(private element: ElementRef, private renderer: Renderer2) {
  // }

  // в данном случае либо OnImnit или OnDestroy
  // все это будет применяться при загрузке
  ngOnInit() {
    this.background = this.defaultColor;
    // nativeElement - dom нода
    // const natEl = this.element.nativeElement;
    // this.renderer.setStyle(natEl, 'background-color', 'blue');
    // this.renderer.setStyle(natEl, 'color', 'white');
  }

  // // mouseenter - event.
  // @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
  //   console.log(event);
  // }
  @HostListener('mouseenter') mouseEnter() {
    this.background = this.hoverColor;
    this.color = 'white';
    // const natEl = this.element.nativeElement;
    // this.renderer.setStyle(natEl, 'background-color', 'blue');
    // this.renderer.addClass(natEl, 'white-text');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = this.defaultColor;
    this.color = 'black';
    // const natEl = this.element.nativeElement;
    // this.renderer.setStyle(natEl, 'background-color', 'transparent');
    // this.renderer.removeClass(natEl, 'white-text');
  }
}
