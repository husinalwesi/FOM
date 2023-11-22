import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveZeroThreeComponent } from './five-zero-three.component';

describe('FiveZeroThreeComponent', () => {
  let component: FiveZeroThreeComponent;
  let fixture: ComponentFixture<FiveZeroThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiveZeroThreeComponent]
    });
    fixture = TestBed.createComponent(FiveZeroThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
