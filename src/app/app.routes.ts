import { Routes } from '@angular/router';
import { LoginPg } from './login-pg/login-pg';
import { SignupPg } from './signup-pg/signup-pg';
import { App } from './app';
import { Header } from './header/header';
import { Homepage } from './homepage/homepage';
import { Veg } from './veg/veg';
import { Nonveg } from './nonveg/nonveg';
import { Sweet } from './sweet/sweet';
import { Beverage } from './beverage/beverage';
import { Favourite } from './favourite/favourite';
import { Aboutus } from './aboutus/aboutus';
import { Profile } from './profile/profile';
import { Vadarecipe } from './vadarecipe/vadarecipe';
// import { LandingPage } from './landing-page/landing-page';

export const routes: Routes = [
    {path: '', component: App},
    {path: 'login', component: LoginPg},
    {path: 'signup', component: SignupPg},
    {path: 'header', component: Header},
    {path: 'homepage', component: Homepage},
    {path: 'veg', component: Veg},
    {path: 'nonveg', component: Nonveg},
    {path: 'sweet', component: Sweet},
    {path: 'beverage', component: Beverage},
    {path: 'favourite', component: Favourite},
    {path: 'aboutus', component: Aboutus},
    {path: 'profile', component: Profile},
    {path: 'vadarecipe', component: Vadarecipe},
];
