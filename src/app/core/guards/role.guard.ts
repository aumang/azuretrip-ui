import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthStateService } from '../services/auth-state.service';

export const roleGuard =
  (requiredRole: string): CanActivateFn =>
  () => {

    const authStateService =
      inject(AuthStateService);

    const router =
      inject(Router);

    const user =
      authStateService.currentUser;

    if (
      user &&
      user.roles.includes(requiredRole)
    ) {
      return true;
    }

    return router.createUrlTree(['/unauthorized']);
  };