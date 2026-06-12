import { Injectable, inject } from '@angular/core';

import { StorageService } from './storage.service';
import { AuthStateService } from './auth-state.service';

import { AuthService } from '../../features/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitializerService {

  private storageService =
    inject(StorageService);

  private authService = inject(AuthService);

  private authStateService = inject(AuthStateService);
  
  initialize(): void {
    console.log('App Initializer Running');
    const token =
        this.storageService.getAccessToken();

    if (!token) {
        return;
    }

    this.authService.getProfile()
        .subscribe({
        next: user => {
            this.authStateService.setCurrentUser(
            user
            );
        },
        error: () => {
            this.storageService.clear();
            this.authStateService.clear();
        }
        });
    }

}