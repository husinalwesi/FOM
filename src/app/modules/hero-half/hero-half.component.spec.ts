import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHalfComponent } from './hero-half.component';

describe('HeroHalfComponent', () => {
  let component: HeroHalfComponent;
  let fixture: ComponentFixture<HeroHalfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroHalfComponent]
    });
    fixture = TestBed.createComponent(HeroHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
