import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerThirdStyleComponent } from './date-picker-third-style.component';

describe('DatePickerThirdStyleComponent', () => {
  let component: DatePickerThirdStyleComponent;
  let fixture: ComponentFixture<DatePickerThirdStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatePickerThirdStyleComponent]
    });
    fixture = TestBed.createComponent(DatePickerThirdStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
