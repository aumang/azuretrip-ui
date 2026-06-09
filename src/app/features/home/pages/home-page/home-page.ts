import { Component, OnInit, inject } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {

  healthMessage = '';

  private homeService = inject(HomeService);

  ngOnInit(): void {

    this.homeService.getHealth()
      .subscribe({
        next: response => {
          this.healthMessage = response;
        },
        error: error => {
          console.error(error);
        }
      });
  }
}
