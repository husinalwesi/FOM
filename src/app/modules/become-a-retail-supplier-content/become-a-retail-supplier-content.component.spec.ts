import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeARetailSupplierContentComponent } from './become-a-retail-supplier-content.component';

describe('BecomeARetailSupplierContentComponent', () => {
  let component: BecomeARetailSupplierContentComponent;
  let fixture: ComponentFixture<BecomeARetailSupplierContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeARetailSupplierContentComponent]
    });
    fixture = TestBed.createComponent(BecomeARetailSupplierContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
