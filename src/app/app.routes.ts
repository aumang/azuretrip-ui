import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { authGuard } from './core/guards/auth.guard';
import { AdminDashboard } from './features/admin/pages/admin-dashboard/admin-dashboard';
import { UserDashboard } from './features/user/pages/user-dashboard/user-dashboard';
import { roleGuard } from './core/guards/role.guard';
import { UnauthorizedPage } from './features/shared/pages/unauthorized/unauthorized';
import { AdminLayout } from './layout/admin-layout/admin-layout';
import { UserLayout } from './layout/user-layout/user-layout';
import { PublicLayout } from './layout/public-layout/public-layout';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        component: Login
      },
      {
        path: 'unauthorized',
        component: UnauthorizedPage
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayout,
    canActivate: [
      authGuard,
      roleGuard('Admin')
    ],
    children: [
      {
        path: '',
        component: AdminDashboard
      }
    ]
  },
  {
    path: 'user',
    component: UserLayout,
    canActivate: [
      authGuard,
      roleGuard('Customer')
    ],
    children: [
      {
        path: '',
        component: UserDashboard
      }
    ]
  }
  // {
  //   path: 'unauthorized',
  //   component: UnauthorizedPage
  // }
  // {
  //   path: 'home',
  //   component: HomePage,
  //   canActivate: [authGuard]
  // }
];