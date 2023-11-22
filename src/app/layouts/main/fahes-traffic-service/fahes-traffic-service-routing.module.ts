import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FahesTrafficServiceComponent } from './fahes-traffic-service.component';

const routes: Routes = [
  { path: '', component: FahesTrafficServiceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FahesTrafficServiceRoutingModule { }
