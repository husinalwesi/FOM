import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesSustainablityComponent } from './fahes-sustainablity.component';

describe('FahesSustainablityComponent', () => {
  let component: FahesSustainablityComponent;
  let fixture: ComponentFixture<FahesSustainablityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesSustainablityComponent]
    });
    fixture = TestBed.createComponent(FahesSustainablityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
