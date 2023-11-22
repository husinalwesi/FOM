import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemsAndRegulationsComponent } from './systems-and-regulations.component';

describe('SystemsAndRegulationsComponent', () => {
  let component: SystemsAndRegulationsComponent;
  let fixture: ComponentFixture<SystemsAndRegulationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemsAndRegulationsComponent]
    });
    fixture = TestBed.createComponent(SystemsAndRegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
