import { Component, OnInit, Input, ViewChild, ElementRef, Output,EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInput : ElementRef;
@ViewChild('amountInput') amountInput : ElementRef;
@Output() itemOutput = new EventEmitter<Ingredient>() ;
  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const itemToAdd = new Ingredient(ingName, ingAmount);
    this.itemOutput.emit(itemToAdd);
  }

}
