import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesTabsMediaCenterComponent } from './fahes-tabs-media-center.component';

describe('FahesTabsMediaCenterComponent', () => {
  let component: FahesTabsMediaCenterComponent;
  let fixture: ComponentFixture<FahesTabsMediaCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesTabsMediaCenterComponent]
    });
    fixture = TestBed.createComponent(FahesTabsMediaCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
