import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedRatingComponent } from './completed-rating.component';

describe('CompletedRatingComponent', () => {
  let component: CompletedRatingComponent;
  let fixture: ComponentFixture<CompletedRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
