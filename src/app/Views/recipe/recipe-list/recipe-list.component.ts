import {AfterContentChecked, AfterViewChecked, Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../../Models/Recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent{


  public recipes: Recipe[] = [
    new Recipe('Test recipe','This is a test recipe','https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=2048x2048&w=is&k=20&c=oo7SGfjmPkybpqoNccDsYWG-4uxSmn8G79NiLA1mNvs='),
    new Recipe('Test recipe','This is a test recipe','https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=2048x2048&w=is&k=20&c=oo7SGfjmPkybpqoNccDsYWG-4uxSmn8G79NiLA1mNvs=')
  ];


}
