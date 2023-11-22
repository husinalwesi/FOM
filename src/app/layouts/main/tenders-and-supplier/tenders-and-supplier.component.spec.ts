import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendersAndSupplierComponent } from './tenders-and-supplier.component';

describe('TendersAndSupplierComponent', () => {
  let component: TendersAndSupplierComponent;
  let fixture: ComponentFixture<TendersAndSupplierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TendersAndSupplierComponent]
    });
    fixture = TestBed.createComponent(TendersAndSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
