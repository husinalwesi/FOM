import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoqoodAppComponent } from './woqood-app.component';

describe('WoqoodAppComponent', () => {
  let component: WoqoodAppComponent;
  let fixture: ComponentFixture<WoqoodAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WoqoodAppComponent]
    });
    fixture = TestBed.createComponent(WoqoodAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
