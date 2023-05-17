import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterFeatureColor]'
})
export class BetterFeatureColorDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @Input('appBetterFeatureColor') defaultColor: string = '';
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow')

    this.backgroundColor = this.defaultColor;

  }

  @HostListener('mouseenter') mouseover(event: Event){
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(event: Event){
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green')
    this.backgroundColor= this.defaultColor
  }


  @HostListener('click') click(event: Event){
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent')
    // window.alert('hello');
  }

}
