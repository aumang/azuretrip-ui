import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';
import { RegisterRequest } from '../models/register-request';
import { CurrentUser } from '../models/current-user';
import { LogoutRequest } from '../models/logout-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  login(request: LoginRequest) {
    return this.http.post<LoginResponse>(
      `${environment.apiUrl}/api/Auth/login`,
      request
    );
  }

  register(request: RegisterRequest) {
    return this.http.post(
      `${environment.apiUrl}/api/Auth/register`,
      request
    );
  }

  getProfile() {
    return this.http.get<CurrentUser>(
        `${environment.apiUrl}/api/Auth/profile`
    );
    }

    logout(request: LogoutRequest) {
    return this.http.post(
        `${environment.apiUrl}/api/Auth/logout`,
        request
    );
    }
}