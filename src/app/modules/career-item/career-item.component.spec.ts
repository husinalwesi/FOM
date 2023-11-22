import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerItemComponent } from './career-item.component';

describe('CareerItemComponent', () => {
  let component: CareerItemComponent;
  let fixture: ComponentFixture<CareerItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareerItemComponent]
    });
    fixture = TestBed.createComponent(CareerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
