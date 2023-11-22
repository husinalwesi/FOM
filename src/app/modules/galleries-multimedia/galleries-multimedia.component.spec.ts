import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriesMultimediaComponent } from './galleries-multimedia.component';

describe('GalleriesMultimediaComponent', () => {
  let component: GalleriesMultimediaComponent;
  let fixture: ComponentFixture<GalleriesMultimediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleriesMultimediaComponent]
    });
    fixture = TestBed.createComponent(GalleriesMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
