import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesMediaCenterWrapperComponent } from './fahes-media-center-wrapper.component';

describe('FahesMediaCenterWrapperComponent', () => {
  let component: FahesMediaCenterWrapperComponent;
  let fixture: ComponentFixture<FahesMediaCenterWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesMediaCenterWrapperComponent]
    });
    fixture = TestBed.createComponent(FahesMediaCenterWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
