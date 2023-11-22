import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FahesServicesComponent } from './fahes-services.component';

const routes: Routes = [
  { path: '', component: FahesServicesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FahesServicesRoutingModule { }
