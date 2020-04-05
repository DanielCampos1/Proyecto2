import { Directive, HostListener, HostBinding,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  //Relaciona la clase css con la variable booleana
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    //Si el elemento sobre el que se hace click es el mismo sobre el que que está definida la directiva
    //sale por la negación del boolean sino es otro elemento por el que sale por false.
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  //Pasandole el elemento sobre el que estoy mostrando el dropdown
  //puedo comparar el componente sobre el que se hace click.
  constructor(private elRef: ElementRef) {}


}
