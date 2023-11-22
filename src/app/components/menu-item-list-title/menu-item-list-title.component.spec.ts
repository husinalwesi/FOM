import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemListTitleComponent } from './menu-item-list-title.component';

describe('MenuItemListTitleComponent', () => {
  let component: MenuItemListTitleComponent;
  let fixture: ComponentFixture<MenuItemListTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuItemListTitleComponent]
    });
    fixture = TestBed.createComponent(MenuItemListTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
