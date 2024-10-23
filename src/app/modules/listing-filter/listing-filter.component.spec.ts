import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingFilterComponent } from './listing-filter.component';

describe('ListingFilterComponent', () => {
  let component: ListingFilterComponent;
  let fixture: ComponentFixture<ListingFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingFilterComponent]
    });
    fixture = TestBed.createComponent(ListingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
