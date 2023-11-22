import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyVehicleComponent } from './my-vehicle.component';

const routes: Routes = [
  {
    path: '', component: MyVehicleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyVehicleRoutingModule { }
