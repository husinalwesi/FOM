import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasRetailersComponent } from './gas-retailers.component';

describe('GasRetailersComponent', () => {
  let component: GasRetailersComponent;
  let fixture: ComponentFixture<GasRetailersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GasRetailersComponent]
    });
    fixture = TestBed.createComponent(GasRetailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
