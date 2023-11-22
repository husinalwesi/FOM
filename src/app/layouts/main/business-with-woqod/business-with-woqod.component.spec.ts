import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessWithWoqodComponent } from './business-with-woqod.component';

describe('BusinessWithWoqodComponent', () => {
  let component: BusinessWithWoqodComponent;
  let fixture: ComponentFixture<BusinessWithWoqodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessWithWoqodComponent]
    });
    fixture = TestBed.createComponent(BusinessWithWoqodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
