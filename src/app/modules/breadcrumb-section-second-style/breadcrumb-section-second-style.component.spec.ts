import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbSectionSecondStyleComponent } from './breadcrumb-section-second-style.component';

describe('BreadcrumbSectionSecondStyleComponent', () => {
  let component: BreadcrumbSectionSecondStyleComponent;
  let fixture: ComponentFixture<BreadcrumbSectionSecondStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbSectionSecondStyleComponent]
    });
    fixture = TestBed.createComponent(BreadcrumbSectionSecondStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
