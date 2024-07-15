import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ratingSubmittedGuard } from './rating-submitted.guard';

describe('ratingSubmittedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ratingSubmittedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
