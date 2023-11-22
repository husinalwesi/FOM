import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesStoryComponent } from './fahes-story.component';

describe('FahesStoryComponent', () => {
  let component: FahesStoryComponent;
  let fixture: ComponentFixture<FahesStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesStoryComponent]
    });
    fixture = TestBed.createComponent(FahesStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
