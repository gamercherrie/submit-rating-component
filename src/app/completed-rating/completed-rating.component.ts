import { Component, OnInit } from '@angular/core';
import { SvgIconComponentComponent } from '../svg-icon-component/svg-icon-component.component';
import { RatingServiceService } from '../rating-service.service';

@Component({
  selector: 'app-completed-rating',
  standalone: true,
  imports: [SvgIconComponentComponent],
  templateUrl: './completed-rating.component.html',
  styleUrl: './completed-rating.component.sass'
})
export class CompletedRatingComponent {
    userSelectedRating: number = 0;
    constructor(private serviceRating: RatingServiceService){}

    ngOnInit(){
      this.userSelectedRating = this.serviceRating.getRating();
    }
}
