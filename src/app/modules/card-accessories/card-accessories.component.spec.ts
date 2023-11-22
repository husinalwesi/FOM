import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccessoriesComponent } from './card-accessories.component';

describe('CardAccessoriesComponent', () => {
  let component: CardAccessoriesComponent;
  let fixture: ComponentFixture<CardAccessoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAccessoriesComponent]
    });
    fixture = TestBed.createComponent(CardAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
