import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsConditionsTabComponent } from './terms-conditions-tab.component';

describe('TermsConditionsTabComponent', () => {
  let component: TermsConditionsTabComponent;
  let fixture: ComponentFixture<TermsConditionsTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsConditionsTabComponent]
    });
    fixture = TestBed.createComponent(TermsConditionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
