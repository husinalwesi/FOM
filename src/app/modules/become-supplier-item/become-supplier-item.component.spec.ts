import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeSupplierItemComponent } from './become-supplier-item.component';

describe('BecomeSupplierItemComponent', () => {
  let component: BecomeSupplierItemComponent;
  let fixture: ComponentFixture<BecomeSupplierItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeSupplierItemComponent]
    });
    fixture = TestBed.createComponent(BecomeSupplierItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
