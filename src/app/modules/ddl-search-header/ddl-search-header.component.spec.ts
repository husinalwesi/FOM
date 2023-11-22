import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdlSearchHeaderComponent } from './ddl-search-header.component';

describe('DdlSearchHeaderComponent', () => {
  let component: DdlSearchHeaderComponent;
  let fixture: ComponentFixture<DdlSearchHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DdlSearchHeaderComponent]
    });
    fixture = TestBed.createComponent(DdlSearchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
