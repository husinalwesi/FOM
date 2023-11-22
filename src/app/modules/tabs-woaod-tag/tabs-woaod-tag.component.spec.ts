import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsWoaodTagComponent } from './tabs-woaod-tag.component';

describe('TabsWoaodTagComponent', () => {
  let component: TabsWoaodTagComponent;
  let fixture: ComponentFixture<TabsWoaodTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsWoaodTagComponent]
    });
    fixture = TestBed.createComponent(TabsWoaodTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
