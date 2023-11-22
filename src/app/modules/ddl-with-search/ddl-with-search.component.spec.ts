import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdlWithSearchComponent } from './ddl-with-search.component';

describe('DdlWithSearchComponent', () => {
  let component: DdlWithSearchComponent;
  let fixture: ComponentFixture<DdlWithSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DdlWithSearchComponent]
    });
    fixture = TestBed.createComponent(DdlWithSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
