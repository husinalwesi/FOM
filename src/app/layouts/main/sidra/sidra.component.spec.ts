import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidraComponent } from './sidra.component';

describe('SidraComponent', () => {
  let component: SidraComponent;
  let fixture: ComponentFixture<SidraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidraComponent]
    });
    fixture = TestBed.createComponent(SidraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
