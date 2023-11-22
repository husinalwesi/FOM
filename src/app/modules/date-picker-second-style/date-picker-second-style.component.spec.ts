import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerSecondStyleComponent } from './date-picker-second-style.component';

describe('DatePickerSecondStyleComponent', () => {
  let component: DatePickerSecondStyleComponent;
  let fixture: ComponentFixture<DatePickerSecondStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatePickerSecondStyleComponent]
    });
    fixture = TestBed.createComponent(DatePickerSecondStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
