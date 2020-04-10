import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{
recipeSelected = new EventEmitter<Recipe>();
    recipes : Recipe[] = [
        new Recipe(
            "Big Hamburger",
            "The best of the West",
            "https://www.thespruceeats.com/thmb/m1EWqDVo7niZKWg29eEjcuhmIuA=/2000x2000/smart/filters:no_upscale()/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg",
            [
                new Ingredient('Bread',2),
                new Ingredient('Meat',1)
            ]),
            new Recipe(
                "Very Big Hamburger",
                "Awesome!",
                "https://i.ytimg.com/vi/dKjtVqLLLR0/hqdefault.jpg",
                [
                    new Ingredient('Bread',2),
                    new Ingredient('Meat',1),
                    new Ingredient('Onion',1)
            ]
            )
      ];

      getRecipes(){
          return this.recipes.slice();
      }
    
}