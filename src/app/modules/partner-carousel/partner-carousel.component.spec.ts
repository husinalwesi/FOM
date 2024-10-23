import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerCarouselComponent } from './partner-carousel.component';

describe('PartnerCarouselComponent', () => {
  let component: PartnerCarouselComponent;
  let fixture: ComponentFixture<PartnerCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerCarouselComponent]
    });
    fixture = TestBed.createComponent(PartnerCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
