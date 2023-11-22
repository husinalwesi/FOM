import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveZeroZeroComponent } from './five-zero-zero.component';

describe('FiveZeroZeroComponent', () => {
  let component: FiveZeroZeroComponent;
  let fixture: ComponentFixture<FiveZeroZeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiveZeroZeroComponent]
    });
    fixture = TestBed.createComponent(FiveZeroZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
