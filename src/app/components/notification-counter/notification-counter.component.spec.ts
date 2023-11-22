import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCounterComponent } from './notification-counter.component';

describe('NotificationCounterComponent', () => {
  let component: NotificationCounterComponent;
  let fixture: ComponentFixture<NotificationCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationCounterComponent]
    });
    fixture = TestBed.createComponent(NotificationCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
