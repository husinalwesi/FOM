import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDetailedComponent } from './provider-detailed.component';

describe('ProviderDetailedComponent', () => {
  let component: ProviderDetailedComponent;
  let fixture: ComponentFixture<ProviderDetailedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProviderDetailedComponent]
    });
    fixture = TestBed.createComponent(ProviderDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
