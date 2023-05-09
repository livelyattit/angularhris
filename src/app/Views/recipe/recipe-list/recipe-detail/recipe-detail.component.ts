import {Component, Input} from '@angular/core';
import {Recipe} from "../../../../Models/Recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {

  @Input() recipe: Recipe = <Recipe>{};

}
