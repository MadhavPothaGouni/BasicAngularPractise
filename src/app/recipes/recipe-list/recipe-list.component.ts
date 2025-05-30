import { Component } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  firstRecipe ='';
  firstDesc = '';
  firstImg ='';
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a Simple Test',
      'https://www.allrecipes.com/thmb/JKyTwbnbpmDIRZHLVscDKEnA404=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-recipe-24700-churros-VAT-hero-01-2x1-dcacfd1de0f94c988d0db3d61654e8bd.jpg'
    ),
  ];
  getItem(){
    this.firstRecipe = this.recipes[0].name
    this.firstDesc = this.recipes[0].description
    this.firstImg = this.recipes[0].imagePath
  }
}
