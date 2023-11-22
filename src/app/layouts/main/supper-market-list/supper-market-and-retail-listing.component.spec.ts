import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupperMarketAndRetailListingComponent } from './supper-market-and-retail-listing.component';

describe('SupperMarketAndRetailListingComponent', () => {
  let component: SupperMarketAndRetailListingComponent;
  let fixture: ComponentFixture<SupperMarketAndRetailListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupperMarketAndRetailListingComponent]
    });
    fixture = TestBed.createComponent(SupperMarketAndRetailListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
