import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {

  // taking from app.component and passing to recipe-list.component
  @Input('abcd') externalRecipes! : Array<{name: string, description: string}>;



  statusCreated = 'BindingUp';
  favBooks = [
    { title: 'Principles' },
    { title: 'The Story of Success' },
    { title: 'Extreme Economies' },
  ];

  onBookAdded(eventData: { statusCreated: string }) {
    this.favBooks = this.favBooks.concat({
      title: eventData.statusCreated,
    });
  }

}
