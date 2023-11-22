import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesEventsComponent } from './fahes-events.component';

describe('FahesEventsComponent', () => {
  let component: FahesEventsComponent;
  let fixture: ComponentFixture<FahesEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesEventsComponent]
    });
    fixture = TestBed.createComponent(FahesEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
