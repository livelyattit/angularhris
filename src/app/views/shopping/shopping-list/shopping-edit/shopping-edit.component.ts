import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../../shared/Ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {

 @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef = <ElementRef>{};
 @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef = <ElementRef>{};

 @Output() ingredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  addIngredient(){

    const  nameInput = this.nameInputRef.nativeElement.value;
    const  amountInput = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(nameInput, amountInput)
    this.ingredient.emit(newIngredient);

  }

  // addIngredient(name: HTMLInputElement, amount: HTMLInputElement): void {
  //
  //   console.log(name.value, amount.value)
  //
  // }
}
