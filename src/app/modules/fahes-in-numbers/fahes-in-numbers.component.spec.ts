import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesInNumbersComponent } from './fahes-in-numbers.component';

describe('FahesInNumbersComponent', () => {
  let component: FahesInNumbersComponent;
  let fixture: ComponentFixture<FahesInNumbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesInNumbersComponent]
    });
    fixture = TestBed.createComponent(FahesInNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
