import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullMapFilterComponent } from './full-map-filter.component';

describe('FullMapFilterComponent', () => {
  let component: FullMapFilterComponent;
  let fixture: ComponentFixture<FullMapFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullMapFilterComponent]
    });
    fixture = TestBed.createComponent(FullMapFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
