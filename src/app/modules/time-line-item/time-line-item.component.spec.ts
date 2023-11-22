import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineItemComponent } from './time-line-item.component';

describe('TimeLineItemComponent', () => {
  let component: TimeLineItemComponent;
  let fixture: ComponentFixture<TimeLineItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeLineItemComponent]
    });
    fixture = TestBed.createComponent(TimeLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
