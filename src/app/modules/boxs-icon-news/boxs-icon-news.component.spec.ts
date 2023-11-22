import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxsIconNewsComponent } from './boxs-icon-news.component';

describe('BoxsIconNewsComponent', () => {
  let component: BoxsIconNewsComponent;
  let fixture: ComponentFixture<BoxsIconNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxsIconNewsComponent]
    });
    fixture = TestBed.createComponent(BoxsIconNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
