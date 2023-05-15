import {Component, Input} from '@angular/core';
import {Recipe} from "../shared/Recipe.model";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {

  selectedRecipe: Recipe = <Recipe>{};


}

