import { Recipe } from './recipe.model';

export class RecipeService{

    recipes : Recipe[] = [
        new Recipe("A test recipe"," This is simply a test","https://c1.peakpx.com/wallpaper/400/456/943/dishes-kitchen-bio-food-recipe-wallpaper-preview.jpg"),
        new Recipe("Another test recipe"," This is simply a test","https://c1.peakpx.com/wallpaper/400/456/943/dishes-kitchen-bio-food-recipe-wallpaper-preview.jpg")
      ];

      getRecipes(){
          return this.recipes.slice();
      }
    
}