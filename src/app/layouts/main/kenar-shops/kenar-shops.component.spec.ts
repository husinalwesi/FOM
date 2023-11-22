import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenarShopsComponent } from './kenar-shops.component';

describe('KenarShopsComponent', () => {
  let component: KenarShopsComponent;
  let fixture: ComponentFixture<KenarShopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KenarShopsComponent]
    });
    fixture = TestBed.createComponent(KenarShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
