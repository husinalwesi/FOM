import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioBtnBlueComponent } from './radio-btn-blue.component';

describe('RadioBtnBlueComponent', () => {
  let component: RadioBtnBlueComponent;
  let fixture: ComponentFixture<RadioBtnBlueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioBtnBlueComponent]
    });
    fixture = TestBed.createComponent(RadioBtnBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
