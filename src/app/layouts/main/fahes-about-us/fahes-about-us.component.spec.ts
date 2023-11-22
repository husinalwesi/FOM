import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesAboutUsComponent } from './fahes-about-us.component';

describe('FahesAboutUsComponent', () => {
  let component: FahesAboutUsComponent;
  let fixture: ComponentFixture<FahesAboutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesAboutUsComponent]
    });
    fixture = TestBed.createComponent(FahesAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
