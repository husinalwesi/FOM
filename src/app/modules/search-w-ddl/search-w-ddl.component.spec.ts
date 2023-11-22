import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWDdlComponent } from './search-w-ddl.component';

describe('SearchWDdlComponent', () => {
  let component: SearchWDdlComponent;
  let fixture: ComponentFixture<SearchWDdlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchWDdlComponent]
    });
    fixture = TestBed.createComponent(SearchWDdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
