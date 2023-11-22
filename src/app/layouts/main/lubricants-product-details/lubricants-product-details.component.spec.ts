import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LubricantsProductDetailsComponent } from './lubricants-product-details.component';

describe('LubricantsProductDetailsComponent', () => {
  let component: LubricantsProductDetailsComponent;
  let fixture: ComponentFixture<LubricantsProductDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LubricantsProductDetailsComponent]
    });
    fixture = TestBed.createComponent(LubricantsProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
