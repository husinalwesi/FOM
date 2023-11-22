import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesNewsComponent } from './fahes-news.component';

describe('FahesNewsComponent', () => {
  let component: FahesNewsComponent;
  let fixture: ComponentFixture<FahesNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesNewsComponent]
    });
    fixture = TestBed.createComponent(FahesNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
