import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coaching Center Management System';
  userName = 'Admin';
  logout() {
    this.userName = 'Super Admin';
  }
}