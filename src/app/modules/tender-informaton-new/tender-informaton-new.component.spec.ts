import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderInformatonNewComponent } from './tender-informaton-new.component';

describe('TenderInformatonNewComponent', () => {
  let component: TenderInformatonNewComponent;
  let fixture: ComponentFixture<TenderInformatonNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenderInformatonNewComponent]
    });
    fixture = TestBed.createComponent(TenderInformatonNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
