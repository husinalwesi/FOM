import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicItemSecondStyleComponent } from './ethic-item-second-style.component';

describe('EthicItemSecondStyleComponent', () => {
  let component: EthicItemSecondStyleComponent;
  let fixture: ComponentFixture<EthicItemSecondStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EthicItemSecondStyleComponent]
    });
    fixture = TestBed.createComponent(EthicItemSecondStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
