import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtoLubricantsGalleriesComponent } from './oto-lubricants-galleries.component';

describe('OtoLubricantsGalleriesComponent', () => {
  let component: OtoLubricantsGalleriesComponent;
  let fixture: ComponentFixture<OtoLubricantsGalleriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtoLubricantsGalleriesComponent]
    });
    fixture = TestBed.createComponent(OtoLubricantsGalleriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
