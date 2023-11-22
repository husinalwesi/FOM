import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewVehicleComponent } from './add-new-vehicle.component';

const routes: Routes = [
  {
    path: '', component: AddNewVehicleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddNewVehicleRoutingModule { }
