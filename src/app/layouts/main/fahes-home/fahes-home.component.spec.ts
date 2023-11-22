import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesHomeComponent } from './fahes-home.component';

describe('FahesHomeComponent', () => {
  let component: FahesHomeComponent;
  let fixture: ComponentFixture<FahesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesHomeComponent]
    });
    fixture = TestBed.createComponent(FahesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
