import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeOfEthicsAndConductsComponent } from './code-of-ethics-and-conducts.component';

describe('CodeOfEthicsAndConductsComponent', () => {
  let component: CodeOfEthicsAndConductsComponent;
  let fixture: ComponentFixture<CodeOfEthicsAndConductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeOfEthicsAndConductsComponent]
    });
    fixture = TestBed.createComponent(CodeOfEthicsAndConductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
