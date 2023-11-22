import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductAndServiceComponent } from './detail-product-and-service.component';

describe('DetailProductAndServiceComponent', () => {
  let component: DetailProductAndServiceComponent;
  let fixture: ComponentFixture<DetailProductAndServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailProductAndServiceComponent]
    });
    fixture = TestBed.createComponent(DetailProductAndServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
