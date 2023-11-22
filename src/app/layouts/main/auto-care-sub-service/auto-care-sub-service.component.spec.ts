import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCareSubServiceComponent } from './auto-care-sub-service.component';

describe('AutoCareSubServiceComponent', () => {
  let component: AutoCareSubServiceComponent;
  let fixture: ComponentFixture<AutoCareSubServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoCareSubServiceComponent]
    });
    fixture = TestBed.createComponent(AutoCareSubServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
