import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewVehicleComponent } from './add-new-vehicle.component';
import { AddNewVehicleRoutingModule } from './add-new-vehicle-routing.module';
import { VehicleDetailsModule } from 'src/app/modules/vehicle-details/vehicle-details.module';

@NgModule({
  declarations: [
    AddNewVehicleComponent
  ],
  imports: [
    CommonModule,
    AddNewVehicleRoutingModule,
    VehicleDetailsModule,
  ]
})
export class AddNewVehicleModule { }
