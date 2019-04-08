import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReviewComponent } from './show-review.component';

describe('ShowReviewComponent', () => {
  let component: ShowReviewComponent;
  let fixture: ComponentFixture<ShowReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
