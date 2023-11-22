import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionFilterComponent } from './inspection-filter.component';

describe('InspectionFilterComponent', () => {
  let component: InspectionFilterComponent;
  let fixture: ComponentFixture<InspectionFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspectionFilterComponent]
    });
    fixture = TestBed.createComponent(InspectionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
