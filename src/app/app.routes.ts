import { RouterModule, Routes } from '@angular/router';
import { RatingComponent } from './rating/rating.component';
import { CompletedRatingComponent } from './completed-rating/completed-rating.component';
import { NgModule } from '@angular/core';
import { RatingSubmittedGuard } from './rating-submitted.guard';

export const routes: Routes = [
    { path: '', component: RatingComponent},
    { path: 'thank-you', component: CompletedRatingComponent,
    canActivate: [RatingSubmittedGuard]},
    { path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
