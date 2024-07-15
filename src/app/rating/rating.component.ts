import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SvgIconComponentComponent } from '../svg-icon-component/svg-icon-component.component';
import { RatingServiceService } from '../rating-service.service';
@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [SvgIconComponentComponent, FormsModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.sass']
})
export class RatingComponent {
  imagePath: string = 'assets/images/icon-star.svg';
  selectedRating: number = 0;

  constructor(private router: Router, private ratingService: RatingServiceService){}

  onSubmit() {
    console.log('this rating', this.selectedRating)
    this.ratingService.setRating(this.selectedRating);
    this.router.navigate(['thank-you']);
  }
}