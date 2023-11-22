import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerJobComponent } from './career-job.component';

describe('CareerJobComponent', () => {
  let component: CareerJobComponent;
  let fixture: ComponentFixture<CareerJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareerJobComponent]
    });
    fixture = TestBed.createComponent(CareerJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
