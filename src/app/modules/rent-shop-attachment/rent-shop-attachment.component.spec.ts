import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentShopAttachmentComponent } from './rent-shop-attachment.component';

describe('RentShopAttachmentComponent', () => {
  let component: RentShopAttachmentComponent;
  let fixture: ComponentFixture<RentShopAttachmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentShopAttachmentComponent]
    });
    fixture = TestBed.createComponent(RentShopAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
