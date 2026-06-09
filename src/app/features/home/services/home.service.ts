import { Injectable, inject } from '@angular/core';

import { ApiService } from '../../../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiService = inject(ApiService);

  getHealth() {
    return this.apiService.getHealth();
  }
}