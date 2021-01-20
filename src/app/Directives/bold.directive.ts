import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  constructor(element: ElementRef, render: Renderer2) {
    render.setStyle(element.nativeElement, 'color', 'yellow');
   }

}
