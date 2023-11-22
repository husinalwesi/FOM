import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCareServiceComponent } from './auto-care-service.component';

describe('AutoCareServiceComponent', () => {
  let component: AutoCareServiceComponent;
  let fixture: ComponentFixture<AutoCareServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoCareServiceComponent]
    });
    fixture = TestBed.createComponent(AutoCareServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
