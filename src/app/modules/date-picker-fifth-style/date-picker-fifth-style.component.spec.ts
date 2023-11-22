import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerFifthStyleComponent } from './date-picker-fifth-style.component';

describe('DatePickerFifthStyleComponent', () => {
  let component: DatePickerFifthStyleComponent;
  let fixture: ComponentFixture<DatePickerFifthStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatePickerFifthStyleComponent]
    });
    fixture = TestBed.createComponent(DatePickerFifthStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
