import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCardComponent } from './save-card.component';

describe('SaveCardComponent', () => {
  let component: SaveCardComponent;
  let fixture: ComponentFixture<SaveCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveCardComponent]
    });
    fixture = TestBed.createComponent(SaveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
