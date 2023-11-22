import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDivComponent } from './modal-div.component';

describe('ModalDivComponent', () => {
  let component: ModalDivComponent;
  let fixture: ComponentFixture<ModalDivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDivComponent]
    });
    fixture = TestBed.createComponent(ModalDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
