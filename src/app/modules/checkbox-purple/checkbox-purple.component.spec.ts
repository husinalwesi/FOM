import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxPurpleComponent } from './checkbox-purple.component';

describe('CheckboxPurpleComponent', () => {
  let component: CheckboxPurpleComponent;
  let fixture: ComponentFixture<CheckboxPurpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxPurpleComponent]
    });
    fixture = TestBed.createComponent(CheckboxPurpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
