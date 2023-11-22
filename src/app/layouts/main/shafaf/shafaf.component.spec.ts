import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShafafComponent } from './shafaf.component';

describe('ShafafComponent', () => {
  let component: ShafafComponent;
  let fixture: ComponentFixture<ShafafComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShafafComponent]
    });
    fixture = TestBed.createComponent(ShafafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
