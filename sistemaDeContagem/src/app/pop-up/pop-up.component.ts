import { Component } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  mostrar: boolean = false;

  show () {
    this.mostrar = !this.mostrar;
  }

  remove() {
    this.mostrar = !this.mostrar
  }
}
