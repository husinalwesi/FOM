import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderHomeComponent } from './tender-home.component';

describe('TenderHomeComponent', () => {
  let component: TenderHomeComponent;
  let fixture: ComponentFixture<TenderHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenderHomeComponent]
    });
    fixture = TestBed.createComponent(TenderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
