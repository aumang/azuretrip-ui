import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

import { AuthStateService } from '../../../core/services/auth-state.service';
import { StorageService } from '../../../core/services/storage.service';

@Component({
  selector: 'app-user-menu',
  imports: [AsyncPipe],
  templateUrl: './user-menu.html',
  styleUrl: './user-menu.css'
})
export class UserMenu {

  private authStateService =
    inject(AuthStateService);

  private storageService =
    inject(StorageService);

  private router =
    inject(Router);

  currentUser$ =
    this.authStateService.currentUser$;

  logout(): void {

    this.storageService.clear();

    this.authStateService.clear();

    this.router.navigate(['/']);
  }
}