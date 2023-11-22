import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBgHalfComponent } from './hero-bg-half.component';

describe('HeroBgHalfComponent', () => {
  let component: HeroBgHalfComponent;
  let fixture: ComponentFixture<HeroBgHalfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroBgHalfComponent]
    });
    fixture = TestBed.createComponent(HeroBgHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
