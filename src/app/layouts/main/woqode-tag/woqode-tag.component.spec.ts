import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoqodeTagComponent } from './woqode-tag.component';

describe('WoqodeTagComponent', () => {
  let component: WoqodeTagComponent;
  let fixture: ComponentFixture<WoqodeTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WoqodeTagComponent]
    });
    fixture = TestBed.createComponent(WoqodeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
