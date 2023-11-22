import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithImageItemComponent } from './list-with-image-item.component';

describe('ListWithImageItemComponent', () => {
  let component: ListWithImageItemComponent;
  let fixture: ComponentFixture<ListWithImageItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListWithImageItemComponent]
    });
    fixture = TestBed.createComponent(ListWithImageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
