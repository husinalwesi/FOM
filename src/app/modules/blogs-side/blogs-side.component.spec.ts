import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsSideComponent } from './blogs-side.component';

describe('BlogsSideComponent', () => {
  let component: BlogsSideComponent;
  let fixture: ComponentFixture<BlogsSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogsSideComponent]
    });
    fixture = TestBed.createComponent(BlogsSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
