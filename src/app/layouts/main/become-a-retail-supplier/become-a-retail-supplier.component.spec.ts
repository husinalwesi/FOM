import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeARetailSupplierComponent } from './become-a-retail-supplier.component';

describe('BecomeARetailSupplierComponent', () => {
  let component: BecomeARetailSupplierComponent;
  let fixture: ComponentFixture<BecomeARetailSupplierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeARetailSupplierComponent]
    });
    fixture = TestBed.createComponent(BecomeARetailSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
