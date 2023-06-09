import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../../shared/Recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {

  @Input() recipe: Recipe = new Recipe('', '', '') ;
  @Output() recipeSelected = new EventEmitter<void>();


  onSelected(){

    this.recipeSelected.emit();

  }

}
