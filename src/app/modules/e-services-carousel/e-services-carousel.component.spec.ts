import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EServicesCarouselComponent } from './e-services-carousel.component';

describe('EServicesCarouselComponent', () => {
  let component: EServicesCarouselComponent;
  let fixture: ComponentFixture<EServicesCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EServicesCarouselComponent]
    });
    fixture = TestBed.createComponent(EServicesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
