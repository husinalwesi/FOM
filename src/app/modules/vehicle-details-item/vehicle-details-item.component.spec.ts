import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailsItemComponent } from './vehicle-details-item.component';

describe('VehicleDetailsItemComponent', () => {
  let component: VehicleDetailsItemComponent;
  let fixture: ComponentFixture<VehicleDetailsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleDetailsItemComponent]
    });
    fixture = TestBed.createComponent(VehicleDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
