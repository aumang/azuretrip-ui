import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { Login } from './features/auth/pages/login/login';
import { authGuard } from './core/guards/auth.guard';
import { AdminDashboard } from './features/admin/pages/admin-dashboard/admin-dashboard';
import { UserDashboard } from './features/user/pages/user-dashboard/user-dashboard';
import { roleGuard } from './core/guards/role.guard';
import { UnauthorizedPage } from './features/shared/pages/unauthorized/unauthorized';

export const routes: Routes = [
  {
    path: '',
    component: Login
  },
  {
    path: 'admin',
    component: AdminDashboard,
    canActivate: [
      authGuard,
      roleGuard('Admin')
    ]
  },
  {
    path: 'user',
    component: UserDashboard,
    canActivate: [
      authGuard,
      roleGuard('Customer')
    ]
  },
  {
    path: 'unauthorized',
    component: UnauthorizedPage
  }
  // {
  //   path: 'home',
  //   component: HomePage,
  //   canActivate: [authGuard]
  // }
];