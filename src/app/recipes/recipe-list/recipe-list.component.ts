import { Component } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a Simple Test',
      'https://www.allrecipes.com/thmb/JKyTwbnbpmDIRZHLVscDKEnA404=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-recipe-24700-churros-VAT-hero-01-2x1-dcacfd1de0f94c988d0db3d61654e8bd.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is a Simple Test',
      'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/cremebrulee_90204_16x9.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is a Simple Test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTTYGRHC1ANlXZbFSb42peuqGQsu7JstwAg&s'
    ),
    new Recipe(
      'A Test Recipe',
      'This is a Simple Test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0L5pax5-5Jolvwwv5l9nSJVeIw3_-1FNpiQ&s'
    ),
    
  ];
 
}
