import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragNdropComponent } from './drag-ndrop.component';

describe('DragNdropComponent', () => {
  let component: DragNdropComponent;
  let fixture: ComponentFixture<DragNdropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DragNdropComponent]
    });
    fixture = TestBed.createComponent(DragNdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
