
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerJobComponent } from './career-job.component';

const routes: Routes = [
  { path: '', component: CareerJobComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerJobRoutingModule { }