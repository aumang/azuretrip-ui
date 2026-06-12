import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../../../core/services/storage.service';
import { Router } from '@angular/router';
import { AuthStateService } from '../../../../core/services/auth-state.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private storageService = inject(StorageService);
  private router = inject(Router);
  private authStateService = inject(AuthStateService);

  loginForm = this.fb.nonNullable.group({
    email: '',
    password: ''
  });

  onSubmit(): void {

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.getRawValue())
      .subscribe({
        next: response => {

          this.storageService.setAccessToken(
            response.accessToken
          );

          this.storageService.setRefreshToken(
            response.refreshToken
          );

          this.authService.getProfile()
          .subscribe({
            next: user => {

              this.authStateService.setCurrentUser(
                user
              );

              this.router.navigate(['/home']);
            },
            error: error => {
              console.error(error);
            }
          });

          this.router.navigate(['/home']);
        },
        error: error => {
          console.error(error);
        }
      });
  }

}
