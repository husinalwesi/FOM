import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuisnessContinuityMangmentComponent } from './buisness-continuity-mangment.component';

describe('BuisnessContinuityMangmentComponent', () => {
  let component: BuisnessContinuityMangmentComponent;
  let fixture: ComponentFixture<BuisnessContinuityMangmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuisnessContinuityMangmentComponent]
    });
    fixture = TestBed.createComponent(BuisnessContinuityMangmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
