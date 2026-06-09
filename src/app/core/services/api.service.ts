import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);

  getHealth() {
    return this.http.get(
      `${environment.apiUrl}/api/Health`,
      { responseType: 'text' }
    );
  }
}