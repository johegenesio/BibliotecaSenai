import { Component } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent {
  mostrar: boolean = false;

  show () {
    this.mostrar = !this.mostrar;
  }

  remove() {
    this.mostrar = !this.mostrar
  }
}
