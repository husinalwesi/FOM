import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImageHalfComponent } from './text-image-half.component';

describe('TextImageHalfComponent', () => {
  let component: TextImageHalfComponent;
  let fixture: ComponentFixture<TextImageHalfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextImageHalfComponent]
    });
    fixture = TestBed.createComponent(TextImageHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
