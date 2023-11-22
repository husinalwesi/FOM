import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicItemComponent } from './ethic-item.component';

describe('EthicItemComponent', () => {
  let component: EthicItemComponent;
  let fixture: ComponentFixture<EthicItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EthicItemComponent]
    });
    fixture = TestBed.createComponent(EthicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
