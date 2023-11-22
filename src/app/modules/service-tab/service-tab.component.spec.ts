import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTabComponent } from './service-tab.component';

describe('ServiceTabComponent', () => {
  let component: ServiceTabComponent;
  let fixture: ComponentFixture<ServiceTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceTabComponent]
    });
    fixture = TestBed.createComponent(ServiceTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
