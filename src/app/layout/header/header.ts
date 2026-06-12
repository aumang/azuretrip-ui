import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthStateService } from '../../core/services/auth-state.service';
import { AuthService } from '../../features/auth/services/auth.service';
import { StorageService } from '../../core/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [AsyncPipe],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  private authStateService =
    inject(AuthStateService);
  
  private authService =
    inject(AuthService);

  private storageService =
    inject(StorageService);

  private router =
    inject(Router);

  currentUser$ = this.authStateService.currentUser$;

  logout(): void {

    const refreshToken =
      this.storageService.getRefreshToken();

    if (!refreshToken) {

      this.storageService.clear();

      this.router.navigate(['/']);

      return;
    }

    this.authService.logout({
        refreshToken
    })
    .subscribe({
      next: () => {

        this.storageService.clear();

        this.authStateService.clear();

        this.router.navigate(['/']);
      },
      error: () => {

        this.storageService.clear();

        this.authStateService.clear();

        this.router.navigate(['/']);
      }
    });
  }
}
