import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.modal';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
 @Input() recipe: Recipe;
 @Output() storedItem = new EventEmitter<string>;
 onItem(item:string){
  this.storedItem.emit(item)
 }
}
