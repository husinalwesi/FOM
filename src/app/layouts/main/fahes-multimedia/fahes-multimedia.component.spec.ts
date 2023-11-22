import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesMultimediaComponent } from './fahes-multimedia.component';

describe('FahesMultimediaComponent', () => {
  let component: FahesMultimediaComponent;
  let fixture: ComponentFixture<FahesMultimediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesMultimediaComponent]
    });
    fixture = TestBed.createComponent(FahesMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
