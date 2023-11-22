import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomActionsComponent } from './bottom-actions.component';

describe('BottomActionsComponent', () => {
  let component: BottomActionsComponent;
  let fixture: ComponentFixture<BottomActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomActionsComponent]
    });
    fixture = TestBed.createComponent(BottomActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
