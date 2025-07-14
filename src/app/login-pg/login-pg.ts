import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-pg',
  imports: [],
  templateUrl: './login-pg.html',
  styleUrl: './login-pg.css'
})
export class LoginPg {
  constructor(private router: Router) {};

  gotoSignup()  {
    this.router.navigate(['/signup']);
  }
  gotoHeader()  {
    this.router.navigate(['/homepage']);
  }
}
