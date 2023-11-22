import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHalfComponent } from './text-half.component';

describe('TextHalfComponent', () => {
  let component: TextHalfComponent;
  let fixture: ComponentFixture<TextHalfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextHalfComponent]
    });
    fixture = TestBed.createComponent(TextHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
