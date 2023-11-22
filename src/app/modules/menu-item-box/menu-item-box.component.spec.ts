import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemBoxComponent } from './menu-item-box.component';

describe('MenuItemBoxComponent', () => {
  let component: MenuItemBoxComponent;
  let fixture: ComponentFixture<MenuItemBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuItemBoxComponent]
    });
    fixture = TestBed.createComponent(MenuItemBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
