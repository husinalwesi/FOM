import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerFilterComponent } from './career-filter.component';

describe('CareerFilterComponent', () => {
  let component: CareerFilterComponent;
  let fixture: ComponentFixture<CareerFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareerFilterComponent]
    });
    fixture = TestBed.createComponent(CareerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
