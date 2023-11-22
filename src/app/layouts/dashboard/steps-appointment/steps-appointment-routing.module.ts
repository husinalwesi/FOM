import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepsAppointmentComponent } from './steps-appointment.component';

const routes: Routes = [
  {
    path: '', component: StepsAppointmentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepsAppointmentRoutingModule { }
