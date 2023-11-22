import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeASupplierModalComponent } from './become-a-supplier-modal.component';

describe('BecomeASupplierModalComponent', () => {
  let component: BecomeASupplierModalComponent;
  let fixture: ComponentFixture<BecomeASupplierModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeASupplierModalComponent]
    });
    fixture = TestBed.createComponent(BecomeASupplierModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
