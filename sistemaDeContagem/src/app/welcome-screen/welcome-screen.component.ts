import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent {
  mostrar: boolean = false;
  
  constructor(private route: Router) {}
  continue(){
    this.mostrar = true;
    setTimeout(() => {
      this.route.navigate(['/home']);
    }, 1000)
  }
}
