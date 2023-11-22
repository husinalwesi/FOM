import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesEServicesCarouselComponent } from './fahes-e-services-carousel.component';

describe('FahesEServicesCarouselComponent', () => {
  let component: FahesEServicesCarouselComponent;
  let fixture: ComponentFixture<FahesEServicesCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesEServicesCarouselComponent]
    });
    fixture = TestBed.createComponent(FahesEServicesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
