import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionCenterFilterComponent } from './inspection-center-filter.component';

describe('InspectionCenterFilterComponent', () => {
  let component: InspectionCenterFilterComponent;
  let fixture: ComponentFixture<InspectionCenterFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspectionCenterFilterComponent]
    });
    fixture = TestBed.createComponent(InspectionCenterFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
