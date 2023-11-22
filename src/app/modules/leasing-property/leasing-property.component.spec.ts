import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasingPropertyComponent } from './leasing-property.component';

describe('LeasingPropertyComponent', () => {
  let component: LeasingPropertyComponent;
  let fixture: ComponentFixture<LeasingPropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeasingPropertyComponent]
    });
    fixture = TestBed.createComponent(LeasingPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
