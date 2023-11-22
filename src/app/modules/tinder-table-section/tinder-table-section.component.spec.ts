import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinderTableSectionComponent } from './tinder-table-section.component';

describe('TinderTableSectionComponent', () => {
  let component: TinderTableSectionComponent;
  let fixture: ComponentFixture<TinderTableSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TinderTableSectionComponent]
    });
    fixture = TestBed.createComponent(TinderTableSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
