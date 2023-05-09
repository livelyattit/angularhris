import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnChanges, DoCheck, AfterContentInit{

  clickStatus: string = 'not clicked';
  i: number = 0;

  @Input() getParentValue: string = '';
  constructor() {

    console.log('signin: constructor called');

  }

  ngOnInit(){
    console.log('signin: ngOnInit called');

  }
  getFormvalue(){
    console.log('signin: getFormvalue called');
    this.clickStatus = 'clicked'
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log('signin: ngOnChanges called');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('signin: ngDoCheck called' + ++this.i);

  }

  ngAfterContentInit(): void {
    console.log('signin: ngAfterContentInit called');
  }
  ngAfterViewInit(): void {

    console.log('signin: ngAfterViewInit called');
  }



}
