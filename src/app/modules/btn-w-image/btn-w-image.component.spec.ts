import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWImageComponent } from './btn-w-image.component';

describe('BtnWImageComponent', () => {
  let component: BtnWImageComponent;
  let fixture: ComponentFixture<BtnWImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnWImageComponent]
    });
    fixture = TestBed.createComponent(BtnWImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
