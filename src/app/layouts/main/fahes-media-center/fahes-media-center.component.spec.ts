import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesMediaCenterComponent } from './fahes-media-center.component';

describe('FahesMediaCenterComponent', () => {
  let component: FahesMediaCenterComponent;
  let fixture: ComponentFixture<FahesMediaCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesMediaCenterComponent]
    });
    fixture = TestBed.createComponent(FahesMediaCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
