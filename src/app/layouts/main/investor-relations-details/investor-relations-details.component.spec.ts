import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorRelationsDetailsComponent } from './investor-relations-details.component';

describe('InvestorRelationsDetailsComponent', () => {
  let component: InvestorRelationsDetailsComponent;
  let fixture: ComponentFixture<InvestorRelationsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestorRelationsDetailsComponent]
    });
    fixture = TestBed.createComponent(InvestorRelationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
