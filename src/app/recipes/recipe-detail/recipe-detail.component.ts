import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  storedDetail = '';
  onDetail(detail: string){
    this.storedDetail = detail
    console.log(detail);
  }
}
