import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationSecondStyleComponent } from './pagination-second-style.component';

describe('PaginationSecondStyleComponent', () => {
  let component: PaginationSecondStyleComponent;
  let fixture: ComponentFixture<PaginationSecondStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationSecondStyleComponent]
    });
    fixture = TestBed.createComponent(PaginationSecondStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
