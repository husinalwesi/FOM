import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesMapComponent } from './fahes-map.component';

describe('FahesMapComponent', () => {
  let component: FahesMapComponent;
  let fixture: ComponentFixture<FahesMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesMapComponent]
    });
    fixture = TestBed.createComponent(FahesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
