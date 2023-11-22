import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourZeroOneComponent } from './four-zero-one.component';

describe('FourZeroOneComponent', () => {
  let component: FourZeroOneComponent;
  let fixture: ComponentFixture<FourZeroOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourZeroOneComponent]
    });
    fixture = TestBed.createComponent(FourZeroOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
