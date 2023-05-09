import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ChefShopping';

  // default component to show
  loadedFeature: string = 'recipe'
  constructor() {}

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }



}
