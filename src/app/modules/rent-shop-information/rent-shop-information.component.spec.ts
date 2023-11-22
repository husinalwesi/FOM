import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentShopInformationComponent } from './rent-shop-information.component';

describe('RentShopInformationComponent', () => {
  let component: RentShopInformationComponent;
  let fixture: ComponentFixture<RentShopInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentShopInformationComponent]
    });
    fixture = TestBed.createComponent(RentShopInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
