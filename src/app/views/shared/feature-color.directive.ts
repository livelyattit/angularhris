import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appFeatureColor]'
})
export class FeatureColorDirective implements OnInit{

  constructor(private element: ElementRef) { }

  ngOnInit(): void {

    this.element.nativeElement.style.backgroundColor = 'green';
  }


}
