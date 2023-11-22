import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceItemComponent } from './price-item.component';

describe('PriceItemComponent', () => {
  let component: PriceItemComponent;
  let fixture: ComponentFixture<PriceItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceItemComponent]
    });
    fixture = TestBed.createComponent(PriceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
