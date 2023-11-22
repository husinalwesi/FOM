import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesWhoWeAreComponent } from './fahes-who-we-are.component';

describe('FahesWhoWeAreComponent', () => {
  let component: FahesWhoWeAreComponent;
  let fixture: ComponentFixture<FahesWhoWeAreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesWhoWeAreComponent]
    });
    fixture = TestBed.createComponent(FahesWhoWeAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
