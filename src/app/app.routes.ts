import { Routes } from '@angular/router';
import { LoginPg } from './login-pg/login-pg';
import { SignupPg } from './signup-pg/signup-pg';
import { App } from './app';
// import { LandingPage } from './landing-page/landing-page';

export const routes: Routes = [
    {path: '', component: App},
    {path: 'login', component: LoginPg},
    {path: 'signup', component: SignupPg}
];
