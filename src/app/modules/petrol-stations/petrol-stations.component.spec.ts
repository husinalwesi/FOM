import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrolStationsComponent } from './petrol-stations.component';

describe('PetrolStationsComponent', () => {
  let component: PetrolStationsComponent;
  let fixture: ComponentFixture<PetrolStationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetrolStationsComponent]
    });
    fixture = TestBed.createComponent(PetrolStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
