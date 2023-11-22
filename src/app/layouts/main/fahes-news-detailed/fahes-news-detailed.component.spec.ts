import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesNewsDetailedComponent } from './fahes-news-detailed.component';

describe('FahesNewsDetailedComponent', () => {
  let component: FahesNewsDetailedComponent;
  let fixture: ComponentFixture<FahesNewsDetailedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesNewsDetailedComponent]
    });
    fixture = TestBed.createComponent(FahesNewsDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
