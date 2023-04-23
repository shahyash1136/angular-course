import { Component } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipes: Recipes[] = [
    new Recipes('A Test', 'This is simply a test', 'https://img.freepik.com/premium-photo/cheese-vada-pav-grated-cheese-wada-pao-popular-bombay-snack-food_466689-69411.jpg?w=740'),
    new Recipes('A Test', 'This is simply a test', 'https://img.freepik.com/premium-photo/cheese-vada-pav-grated-cheese-wada-pao-popular-bombay-snack-food_466689-69411.jpg?w=740')
  ]
}
