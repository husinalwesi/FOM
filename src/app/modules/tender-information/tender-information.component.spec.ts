import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderInformationComponent } from './tender-information.component';

describe('TenderInformationComponent', () => {
  let component: TenderInformationComponent;
  let fixture: ComponentFixture<TenderInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenderInformationComponent]
    });
    fixture = TestBed.createComponent(TenderInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
