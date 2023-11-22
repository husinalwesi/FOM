import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksFilesComponent } from './links-files.component';

describe('LinksFilesComponent', () => {
  let component: LinksFilesComponent;
  let fixture: ComponentFixture<LinksFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinksFilesComponent]
    });
    fixture = TestBed.createComponent(LinksFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
