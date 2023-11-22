import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqSearchSectionComponent } from './faq-search-section.component';

describe('FaqSearchSectionComponent', () => {
  let component: FaqSearchSectionComponent;
  let fixture: ComponentFixture<FaqSearchSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqSearchSectionComponent]
    });
    fixture = TestBed.createComponent(FaqSearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
