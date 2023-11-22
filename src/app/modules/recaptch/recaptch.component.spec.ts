import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaptchComponent } from './recaptch.component';

describe('RecaptchComponent', () => {
  let component: RecaptchComponent;
  let fixture: ComponentFixture<RecaptchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecaptchComponent]
    });
    fixture = TestBed.createComponent(RecaptchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
