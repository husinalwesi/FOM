import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsAppointmentComponent } from './steps-appointment.component';

describe('StepsAppointmentComponent', () => {
  let component: StepsAppointmentComponent;
  let fixture: ComponentFixture<StepsAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepsAppointmentComponent]
    });
    fixture = TestBed.createComponent(StepsAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
