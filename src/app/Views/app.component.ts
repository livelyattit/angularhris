import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {



  title = 'ChefShopping';

  takeParentValue: string = 'affan';

  externalRecipes : Array<{name: string, description: string}> = [{name: "", description: ""}] ;

  constructor() {


    console.log('content will change');
    setTimeout(()=> this.takeParentValue = 'faizan'  , 2000)


    // https://timmousk.com/blog/typescript-array-of-objects/
    // passed data to child
    setTimeout(()=>
        this.externalRecipes = [
          {name: 'biryani', description: 'sindhi biryani'},
          {name: 'karhaai', description: 'sindhi biryani'},
          {name: 'chaampen', description: 'sindhi biryani'},
          {name: 'kaleji', description: 'sindhi biryani'}
        ]
      , 10000 )

  }



}
