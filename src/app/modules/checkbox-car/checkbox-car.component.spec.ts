import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxCarComponent } from './checkbox-car.component';

describe('CheckboxCarComponent', () => {
  let component: CheckboxCarComponent;
  let fixture: ComponentFixture<CheckboxCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxCarComponent]
    });
    fixture = TestBed.createComponent(CheckboxCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
