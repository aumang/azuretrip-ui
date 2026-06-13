import { Injectable, inject } from '@angular/core';

import { StorageService } from './storage.service';
import { AuthStateService } from './auth-state.service';

import { AuthService } from '../../features/auth/services/auth.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppInitializerService {

  private storageService =
    inject(StorageService);

  private authService = inject(AuthService);

  private authStateService = inject(AuthStateService);
  
  async initialize(): Promise<void> {

  console.log('App Initializer Running');

  const token =
    this.storageService.getAccessToken();

  if (!token) {
    return;
  }

  try {

    const user =
      await firstValueFrom(
        this.authService.getProfile()
      );

    this.authStateService.setCurrentUser(
      user
    );

  }
  catch {

    this.storageService.clear();
    this.authStateService.clear();
  }
}

}