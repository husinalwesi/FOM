import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeSupplierComponent } from './become-supplier.component';

describe('BecomeSupplierComponent', () => {
  let component: BecomeSupplierComponent;
  let fixture: ComponentFixture<BecomeSupplierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeSupplierComponent]
    });
    fixture = TestBed.createComponent(BecomeSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
