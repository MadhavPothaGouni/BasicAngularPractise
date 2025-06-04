import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingrediant } from '../../shared/ingrediant.modal';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingrediant>()

  onAdditem(){
    const ingName = this.nameRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingrediant(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
