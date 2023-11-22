import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesServiceInspectionComponent } from './fahes-service-inspection.component';

describe('FahesServiceInspectionComponent', () => {
  let component: FahesServiceInspectionComponent;
  let fixture: ComponentFixture<FahesServiceInspectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesServiceInspectionComponent]
    });
    fixture = TestBed.createComponent(FahesServiceInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
