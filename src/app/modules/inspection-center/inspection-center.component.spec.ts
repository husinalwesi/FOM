import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionCenterComponent } from './inspection-center.component';

describe('InspectionCenterComponent', () => {
  let component: InspectionCenterComponent;
  let fixture: ComponentFixture<InspectionCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspectionCenterComponent]
    });
    fixture = TestBed.createComponent(InspectionCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
