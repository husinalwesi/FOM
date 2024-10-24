import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropImgComponent } from './crop-img.component';

describe('CropImgComponent', () => {
  let component: CropImgComponent;
  let fixture: ComponentFixture<CropImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CropImgComponent]
    });
    fixture = TestBed.createComponent(CropImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
