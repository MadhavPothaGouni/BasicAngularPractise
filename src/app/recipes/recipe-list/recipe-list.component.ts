import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { recipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[];
  @Output() recipewasSelected = new EventEmitter<Recipe>();
  private recipeService = inject(recipeService)

  // constructor(private recipeService: recipeService){}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe()
  }
  onSelecteRecipe(recipe: Recipe){
    console.log(recipe);
    this.recipewasSelected.emit(recipe)
  }
 
}
