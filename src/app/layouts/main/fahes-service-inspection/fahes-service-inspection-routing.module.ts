import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FahesServiceInspectionComponent } from './fahes-service-inspection.component';

const routes: Routes = [
  { path: '', component: FahesServiceInspectionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FahesServiceInspectionRoutingModule { }
