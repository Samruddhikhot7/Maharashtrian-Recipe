import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-pg',
  imports: [],
  templateUrl: './signup-pg.html',
  styleUrl: './signup-pg.css'
})
export class SignupPg {
  constructor(private router: Router){};

  gotoLogin()  {
    this.router.navigate(['/login']);
  }
}
