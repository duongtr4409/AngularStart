import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appErrorMessage]'
})
export class ErrorMessageDirective {

  constructor(element: ElementRef, render: Renderer2) { 
    render.setStyle(element.nativeElement, "color", "red");
  }

}
