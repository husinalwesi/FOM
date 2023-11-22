import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesContactUsComponent } from './fahes-contact-us.component';

describe('FahesContactUsComponent', () => {
  let component: FahesContactUsComponent;
  let fixture: ComponentFixture<FahesContactUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesContactUsComponent]
    });
    fixture = TestBed.createComponent(FahesContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
