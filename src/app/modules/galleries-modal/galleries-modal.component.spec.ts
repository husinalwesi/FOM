import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriesModalComponent } from './galleries-modal.component';

describe('GalleriesModalComponent', () => {
  let component: GalleriesModalComponent;
  let fixture: ComponentFixture<GalleriesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleriesModalComponent]
    });
    fixture = TestBed.createComponent(GalleriesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
