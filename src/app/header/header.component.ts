import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class headerComponent {
  @Output() featureSelected = new EventEmitter<string>
  onRecipe(feature: string) {
    this.featureSelected.emit(feature);
  }
}
