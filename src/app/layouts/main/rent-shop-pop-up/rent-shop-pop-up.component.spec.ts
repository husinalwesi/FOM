import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentShopPopUpComponent } from './rent-shop-pop-up.component';

describe('RentShopPopUpComponent', () => {
  let component: RentShopPopUpComponent;
  let fixture: ComponentFixture<RentShopPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentShopPopUpComponent]
    });
    fixture = TestBed.createComponent(RentShopPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
