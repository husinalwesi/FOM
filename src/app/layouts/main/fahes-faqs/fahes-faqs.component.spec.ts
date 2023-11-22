import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesFaqsComponent } from './fahes-faqs.component';

describe('FahesFaqsComponent', () => {
  let component: FahesFaqsComponent;
  let fixture: ComponentFixture<FahesFaqsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesFaqsComponent]
    });
    fixture = TestBed.createComponent(FahesFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
