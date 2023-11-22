import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderSupplierTableComponent } from './tender-supplier-table.component';

describe('TenderSupplierTableComponent', () => {
  let component: TenderSupplierTableComponent;
  let fixture: ComponentFixture<TenderSupplierTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenderSupplierTableComponent]
    });
    fixture = TestBed.createComponent(TenderSupplierTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
