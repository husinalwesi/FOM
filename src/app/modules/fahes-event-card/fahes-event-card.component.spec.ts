import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesEventCardComponent } from './fahes-event-card.component';

describe('FahesEventCardComponent', () => {
  let component: FahesEventCardComponent;
  let fixture: ComponentFixture<FahesEventCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesEventCardComponent]
    });
    fixture = TestBed.createComponent(FahesEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
