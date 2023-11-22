import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesEServicesComponent } from './fahes-e-services.component';

describe('FahesEServicesComponent', () => {
  let component: FahesEServicesComponent;
  let fixture: ComponentFixture<FahesEServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesEServicesComponent]
    });
    fixture = TestBed.createComponent(FahesEServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
