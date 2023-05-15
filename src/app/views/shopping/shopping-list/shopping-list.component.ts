import {Component, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../../shared/Ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {


  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 20)
  ];

  protected readonly Ingredient = Ingredient;

  addNewIngredient(newIngredient: Ingredient) {

    this.ingredients.push(newIngredient);
  }
}
