import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselServiceDetailsComponent } from './carousel-service-details.component';

describe('CarouselServiceDetailsComponent', () => {
  let component: CarouselServiceDetailsComponent;
  let fixture: ComponentFixture<CarouselServiceDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselServiceDetailsComponent]
    });
    fixture = TestBed.createComponent(CarouselServiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
