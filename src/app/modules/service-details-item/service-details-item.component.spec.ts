import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsItemComponent } from './service-details-item.component';

describe('ServiceDetailsItemComponent', () => {
  let component: ServiceDetailsItemComponent;
  let fixture: ComponentFixture<ServiceDetailsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceDetailsItemComponent]
    });
    fixture = TestBed.createComponent(ServiceDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
