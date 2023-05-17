import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;
  constructor(private elementRef: ElementRef) { }

  @HostListener('click') toggleDropdown(){
    // toggling dropdown
    this.isOpen = !this.isOpen;
  }

}
