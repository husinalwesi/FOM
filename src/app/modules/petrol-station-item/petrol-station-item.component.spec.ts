import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrolStationItemComponent } from './petrol-station-item.component';

describe('PetrolStationItemComponent', () => {
  let component: PetrolStationItemComponent;
  let fixture: ComponentFixture<PetrolStationItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetrolStationItemComponent]
    });
    fixture = TestBed.createComponent(PetrolStationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
