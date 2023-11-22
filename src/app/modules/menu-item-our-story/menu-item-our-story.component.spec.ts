import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemOurStoryComponent } from './menu-item-our-story.component';

describe('MenuItemOurStoryComponent', () => {
  let component: MenuItemOurStoryComponent;
  let fixture: ComponentFixture<MenuItemOurStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuItemOurStoryComponent]
    });
    fixture = TestBed.createComponent(MenuItemOurStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
