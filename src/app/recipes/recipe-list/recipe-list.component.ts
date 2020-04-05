import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() outRecipe = new EventEmitter<Recipe>();
  recipes : Recipe[] = [
    new Recipe("A test recipe"," This is simply a test","https://c1.peakpx.com/wallpaper/400/456/943/dishes-kitchen-bio-food-recipe-wallpaper-preview.jpg"),
    new Recipe("Another test recipe"," This is simply a test","https://c1.peakpx.com/wallpaper/400/456/943/dishes-kitchen-bio-food-recipe-wallpaper-preview.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

  onSelectItem(item :Recipe){
    this.outRecipe.emit(item);
  }

}
