import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostActionComponent } from './post-action.component';

describe('PostActionComponent', () => {
  let component: PostActionComponent;
  let fixture: ComponentFixture<PostActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostActionComponent]
    });
    fixture = TestBed.createComponent(PostActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
