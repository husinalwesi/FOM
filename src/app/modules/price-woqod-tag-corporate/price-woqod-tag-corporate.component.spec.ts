import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceWoqodTagCorporateComponent } from './price-woqod-tag-corporate.component';

describe('PriceWoqodTagCorporateComponent', () => {
  let component: PriceWoqodTagCorporateComponent;
  let fixture: ComponentFixture<PriceWoqodTagCorporateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceWoqodTagCorporateComponent]
    });
    fixture = TestBed.createComponent(PriceWoqodTagCorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
