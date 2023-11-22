import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesServicesComponent } from './fahes-services.component';

describe('FahesServicesComponent', () => {
  let component: FahesServicesComponent;
  let fixture: ComponentFixture<FahesServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesServicesComponent]
    });
    fixture = TestBed.createComponent(FahesServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
