import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosMultimediaComponent } from './videos-multimedia.component';

describe('VideosMultimediaComponent', () => {
  let component: VideosMultimediaComponent;
  let fixture: ComponentFixture<VideosMultimediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideosMultimediaComponent]
    });
    fixture = TestBed.createComponent(VideosMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
