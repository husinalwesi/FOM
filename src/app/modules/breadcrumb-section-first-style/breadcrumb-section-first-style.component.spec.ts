import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbSectionFirstStyleComponent } from './breadcrumb-section-first-style.component';

describe('BreadcrumbSectionFirstStyleComponent', () => {
  let component: BreadcrumbSectionFirstStyleComponent;
  let fixture: ComponentFixture<BreadcrumbSectionFirstStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbSectionFirstStyleComponent]
    });
    fixture = TestBed.createComponent(BreadcrumbSectionFirstStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
