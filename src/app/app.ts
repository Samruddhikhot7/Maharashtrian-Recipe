import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginPg } from './login-pg/login-pg';
import { SignupPg } from './signup-pg/signup-pg';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [LoginPg, SignupPg, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Maharashtrian_Recipe';
  islanding = true;
  constructor(private router: Router) { };
  gotoLogin() {
    this.islanding = false;
    this.router.navigate(['/login']);
  }

  gotoSignup() {
    this.islanding = false;
    this.router.navigate(['/signup']);
  }
}
