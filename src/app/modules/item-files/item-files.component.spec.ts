import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFilesComponent } from './item-files.component';

describe('ItemFilesComponent', () => {
  let component: ItemFilesComponent;
  let fixture: ComponentFixture<ItemFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemFilesComponent]
    });
    fixture = TestBed.createComponent(ItemFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
