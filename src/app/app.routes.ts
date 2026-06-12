import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { Login } from './features/auth/pages/login/login';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: Login
  },
  {
    path: 'home',
    component: HomePage,
    canActivate: [authGuard]
  }
];