import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LubricantsComponent } from './lubricants.component';

describe('LubricantsComponent', () => {
  let component: LubricantsComponent;
  let fixture: ComponentFixture<LubricantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LubricantsComponent]
    });
    fixture = TestBed.createComponent(LubricantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
