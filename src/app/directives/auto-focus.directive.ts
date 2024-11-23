import {AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective{


  @Input() appAutoFocus: string = ""

  constructor(private el: ElementRef) {

  }


  @HostListener('focus')
  onFocus() {

    this.el.nativeElement.style.backgroundColor="red";

  }

  @HostListener('blur')
  onBlur() {
    this.el.nativeElement.style.backgroundColor="";
  }

}
