import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceWoqodTagComponent } from './price-woqod-tag.component';

describe('PriceWoqodTagComponent', () => {
  let component: PriceWoqodTagComponent;
  let fixture: ComponentFixture<PriceWoqodTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceWoqodTagComponent]
    });
    fixture = TestBed.createComponent(PriceWoqodTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
