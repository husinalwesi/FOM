import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsProductAndServiceComponent } from './tabs-product-and-service.component';

describe('TabsProductAndServiceComponent', () => {
  let component: TabsProductAndServiceComponent;
  let fixture: ComponentFixture<TabsProductAndServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsProductAndServiceComponent]
    });
    fixture = TestBed.createComponent(TabsProductAndServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
