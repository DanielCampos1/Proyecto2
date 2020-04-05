import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemSelected = 'recipe'; //Lo inicializo para que arranque en el menú recipe, sino quedaría la pagina en blanco

  onItemSelct(item : string){
    this.itemSelected = item;
  }
}
