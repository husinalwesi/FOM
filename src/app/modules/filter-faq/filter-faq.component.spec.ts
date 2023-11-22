import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFaqComponent } from './filter-faq.component';

describe('FilterFaqComponent', () => {
  let component: FilterFaqComponent;
  let fixture: ComponentFixture<FilterFaqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterFaqComponent]
    });
    fixture = TestBed.createComponent(FilterFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
