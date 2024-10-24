import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPostComponent } from './no-post.component';

describe('NoPostComponent', () => {
  let component: NoPostComponent;
  let fixture: ComponentFixture<NoPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoPostComponent]
    });
    fixture = TestBed.createComponent(NoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
