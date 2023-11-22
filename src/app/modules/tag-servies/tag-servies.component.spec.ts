import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagServiesComponent } from './tag-servies.component';

describe('TagServiesComponent', () => {
  let component: TagServiesComponent;
  let fixture: ComponentFixture<TagServiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagServiesComponent]
    });
    fixture = TestBed.createComponent(TagServiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
