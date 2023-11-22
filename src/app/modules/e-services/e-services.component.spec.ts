import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EServicesComponent } from './e-services.component';

describe('EServicesComponent', () => {
  let component: EServicesComponent;
  let fixture: ComponentFixture<EServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EServicesComponent]
    });
    fixture = TestBed.createComponent(EServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
