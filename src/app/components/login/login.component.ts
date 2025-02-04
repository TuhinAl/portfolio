import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Implement login logic here
    // For now, redirect to dashboard on login
    // this.router.navigate(['/dashboard']);
  }
  // onSubmit(){

  // }
}