import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsSequareComponent } from './promotions-sequare.component';

describe('PromotionsSequareComponent', () => {
  let component: PromotionsSequareComponent;
  let fixture: ComponentFixture<PromotionsSequareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionsSequareComponent]
    });
    fixture = TestBed.createComponent(PromotionsSequareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
