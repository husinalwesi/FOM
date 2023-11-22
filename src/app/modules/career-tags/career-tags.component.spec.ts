import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerTagsComponent } from './career-tags.component';

describe('CareerTagsComponent', () => {
  let component: CareerTagsComponent;
  let fixture: ComponentFixture<CareerTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareerTagsComponent]
    });
    fixture = TestBed.createComponent(CareerTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
