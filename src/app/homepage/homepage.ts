import { Component } from '@angular/core';
import { Header } from '../header/header';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [Header, RouterLinkActive, RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

}
