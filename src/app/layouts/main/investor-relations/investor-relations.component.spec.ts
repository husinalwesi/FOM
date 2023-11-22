import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorRelationsComponent } from './investor-relations.component';

describe('InvestorRelationsComponent', () => {
  let component: InvestorRelationsComponent;
  let fixture: ComponentFixture<InvestorRelationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestorRelationsComponent]
    });
    fixture = TestBed.createComponent(InvestorRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
