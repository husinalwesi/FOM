import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCenterWrapperComponent } from './media-center-wrapper.component';

describe('MediaCenterWrapperComponent', () => {
  let component: MediaCenterWrapperComponent;
  let fixture: ComponentFixture<MediaCenterWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaCenterWrapperComponent]
    });
    fixture = TestBed.createComponent(MediaCenterWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
