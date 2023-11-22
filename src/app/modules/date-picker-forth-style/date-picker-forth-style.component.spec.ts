import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerForthStyleComponent } from './date-picker-forth-style.component';

describe('DatePickerForthStyleComponent', () => {
  let component: DatePickerForthStyleComponent;
  let fixture: ComponentFixture<DatePickerForthStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatePickerForthStyleComponent]
    });
    fixture = TestBed.createComponent(DatePickerForthStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
