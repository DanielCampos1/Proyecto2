import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingLIstService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[];

  constructor(private slService: ShoppingLIstService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientAdded.subscribe(
      (ingredientList: Ingredient[]) => {this.ingredients = ingredientList}
    );
  }

  onItemAdded(item :Ingredient){
    this.slService.addIngredient(item);
  }

}
