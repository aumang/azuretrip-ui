import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-page',
  imports: [AsyncPipe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  private homeService = inject(HomeService);

  healthMessage$: Observable<string> =
    this.homeService.getHealth();
}