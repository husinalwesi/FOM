import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterWTabsMultimediaComponent } from './filter-w-tabs-multimedia.component';

describe('FilterWTabsMultimediaComponent', () => {
  let component: FilterWTabsMultimediaComponent;
  let fixture: ComponentFixture<FilterWTabsMultimediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterWTabsMultimediaComponent]
    });
    fixture = TestBed.createComponent(FilterWTabsMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
