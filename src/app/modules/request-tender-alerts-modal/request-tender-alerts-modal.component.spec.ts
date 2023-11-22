import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTenderAlertsModalComponent } from './request-tender-alerts-modal.component';

describe('RequestTenderAlertsModalComponent', () => {
  let component: RequestTenderAlertsModalComponent;
  let fixture: ComponentFixture<RequestTenderAlertsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestTenderAlertsModalComponent]
    });
    fixture = TestBed.createComponent(RequestTenderAlertsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
