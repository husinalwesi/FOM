import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoqodFeedbackComponent } from './woqod-feedback.component';

describe('WoqodFeedbackComponent', () => {
  let component: WoqodFeedbackComponent;
  let fixture: ComponentFixture<WoqodFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WoqodFeedbackComponent]
    });
    fixture = TestBed.createComponent(WoqodFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
