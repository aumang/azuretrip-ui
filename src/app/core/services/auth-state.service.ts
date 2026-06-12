import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CurrentUser } from '../../features/auth/models/current-user';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  private currentUserSubject =
    new BehaviorSubject<CurrentUser | null>(null);

  currentUser$ =
    this.currentUserSubject.asObservable();

  setCurrentUser(user: CurrentUser): void {
    this.currentUserSubject.next(user);
  }

  clear(): void {
    this.currentUserSubject.next(null);
  }

  get currentUser(): CurrentUser | null {
    return this.currentUserSubject.value;
  }

  get isLoggedIn(): boolean {
    return this.currentUser !== null;
  }
}