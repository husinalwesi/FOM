import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionItemComponent } from './inspection-item.component';

describe('InspectionItemComponent', () => {
  let component: InspectionItemComponent;
  let fixture: ComponentFixture<InspectionItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspectionItemComponent]
    });
    fixture = TestBed.createComponent(InspectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
