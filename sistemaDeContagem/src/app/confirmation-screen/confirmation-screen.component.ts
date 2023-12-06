import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-screen',
  templateUrl: './confirmation-screen.component.html',
  styleUrls: ['./confirmation-screen.component.css']
})
export class ConfirmationScreenComponent implements OnInit {
  constructor(private route: Router) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.route.navigate(['']);
    }, 2000)
  }
}
