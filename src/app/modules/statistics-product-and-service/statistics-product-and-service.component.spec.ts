import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsProductAndServiceComponent } from './statistics-product-and-service.component';

describe('StatisticsProductAndServiceComponent', () => {
  let component: StatisticsProductAndServiceComponent;
  let fixture: ComponentFixture<StatisticsProductAndServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsProductAndServiceComponent]
    });
    fixture = TestBed.createComponent(StatisticsProductAndServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
