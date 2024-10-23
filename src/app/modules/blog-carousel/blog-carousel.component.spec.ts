import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCarouselComponent } from './blog-carousel.component';

describe('BlogCarouselComponent', () => {
  let component: BlogCarouselComponent;
  let fixture: ComponentFixture<BlogCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogCarouselComponent]
    });
    fixture = TestBed.createComponent(BlogCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
