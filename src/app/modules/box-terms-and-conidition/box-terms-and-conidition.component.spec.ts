import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTermsAndConiditionComponent } from './box-terms-and-conidition.component';

describe('BoxTermsAndConiditionComponent', () => {
  let component: BoxTermsAndConiditionComponent;
  let fixture: ComponentFixture<BoxTermsAndConiditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxTermsAndConiditionComponent]
    });
    fixture = TestBed.createComponent(BoxTermsAndConiditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
