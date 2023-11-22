import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenarMapComponent } from './kenar-map.component';

describe('KenarMapComponent', () => {
  let component: KenarMapComponent;
  let fixture: ComponentFixture<KenarMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KenarMapComponent]
    });
    fixture = TestBed.createComponent(KenarMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
