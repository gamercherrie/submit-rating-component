import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RatingServiceService } from './rating-service.service';

@Injectable({
  providedIn: 'root'
})
export class RatingSubmittedGuard implements CanActivate {
  constructor(private ratingService: RatingServiceService, private router: Router) {}

  canActivate(): boolean {
    if (this.ratingService.isRatingSubmitted()) {
      return true;
    } else {
      this.router.navigate(['/']); // Redirect to the home or rating page
      return false;
    }
  }
}