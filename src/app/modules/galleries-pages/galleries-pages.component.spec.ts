import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriesPagesComponent } from './galleries-pages.component';

describe('GalleriesPagesComponent', () => {
  let component: GalleriesPagesComponent;
  let fixture: ComponentFixture<GalleriesPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleriesPagesComponent]
    });
    fixture = TestBed.createComponent(GalleriesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
