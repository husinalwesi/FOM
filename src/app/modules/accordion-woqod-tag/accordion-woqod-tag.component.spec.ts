import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionWoqodTagComponent } from './accordion-woqod-tag.component';

describe('AccordionWoqodTagComponent', () => {
  let component: AccordionWoqodTagComponent;
  let fixture: ComponentFixture<AccordionWoqodTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionWoqodTagComponent]
    });
    fixture = TestBed.createComponent(AccordionWoqodTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
