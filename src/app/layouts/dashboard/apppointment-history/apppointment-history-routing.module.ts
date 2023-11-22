import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApppointmentHistoryComponent } from './apppointment-history.component';

const routes: Routes = [
  {
    path: '', component: ApppointmentHistoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApppointmentHistoryRoutingModule { }
