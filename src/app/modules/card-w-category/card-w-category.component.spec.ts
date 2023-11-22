import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWCategoryComponent } from './card-w-category.component';

describe('CardWCategoryComponent', () => {
  let component: CardWCategoryComponent;
  let fixture: ComponentFixture<CardWCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardWCategoryComponent]
    });
    fixture = TestBed.createComponent(CardWCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
