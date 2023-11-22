import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApppointmentHistoryComponent } from './apppointment-history.component';

describe('ApppointmentHistoryComponent', () => {
  let component: ApppointmentHistoryComponent;
  let fixture: ComponentFixture<ApppointmentHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApppointmentHistoryComponent]
    });
    fixture = TestBed.createComponent(ApppointmentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
