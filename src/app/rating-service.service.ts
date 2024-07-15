import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingServiceService {
  private rating: number = 0;

  setRating(rating: number){
    this.rating = rating;
  }

  getRating(): number {
    return this.rating
  }

  isRatingSubmitted(): boolean{
    return this.rating !== 0;
  }
}
