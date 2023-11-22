import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInspectionFahesComponent } from './book-inspection-fahes.component';

describe('BookInspectionFahesComponent', () => {
  let component: BookInspectionFahesComponent;
  let fixture: ComponentFixture<BookInspectionFahesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookInspectionFahesComponent]
    });
    fixture = TestBed.createComponent(BookInspectionFahesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
