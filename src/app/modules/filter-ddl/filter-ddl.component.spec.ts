import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDdlComponent } from './filter-ddl.component';

describe('FilterDdlComponent', () => {
  let component: FilterDdlComponent;
  let fixture: ComponentFixture<FilterDdlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterDdlComponent]
    });
    fixture = TestBed.createComponent(FilterDdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
