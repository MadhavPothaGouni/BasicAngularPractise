import { Component, inject } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.modal';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { shoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingrediant[];
  private shoppingService = inject(shoppingService)
  onIngredientData(ingredient: Ingrediant){
    console.log(ingredient);
  }
}
