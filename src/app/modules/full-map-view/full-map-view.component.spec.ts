import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullMapViewComponent } from './full-map-view.component';

describe('FullMapViewComponent', () => {
  let component: FullMapViewComponent;
  let fixture: ComponentFixture<FullMapViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullMapViewComponent]
    });
    fixture = TestBed.createComponent(FullMapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
