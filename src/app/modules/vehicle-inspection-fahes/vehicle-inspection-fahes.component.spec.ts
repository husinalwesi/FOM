import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInspectionFahesComponent } from './vehicle-inspection-fahes.component';

describe('VehicleInspectionFahesComponent', () => {
  let component: VehicleInspectionFahesComponent;
  let fixture: ComponentFixture<VehicleInspectionFahesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleInspectionFahesComponent]
    });
    fixture = TestBed.createComponent(VehicleInspectionFahesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
