import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurValuesBtnComponent } from './our-values-btn.component';

describe('OurValuesBtnComponent', () => {
  let component: OurValuesBtnComponent;
  let fixture: ComponentFixture<OurValuesBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurValuesBtnComponent]
    });
    fixture = TestBed.createComponent(OurValuesBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
