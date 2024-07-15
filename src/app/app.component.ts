import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RatingComponent } from './rating/rating.component';
import { CompletedRatingComponent } from './completed-rating/completed-rating.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RatingComponent,
    CompletedRatingComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'interactive-component';
}
