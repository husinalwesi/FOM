import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesAboutUsHomeComponent } from './fahes-about-us-home.component';

describe('FahesAboutUsHomeComponent', () => {
  let component: FahesAboutUsHomeComponent;
  let fixture: ComponentFixture<FahesAboutUsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesAboutUsHomeComponent]
    });
    fixture = TestBed.createComponent(FahesAboutUsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
