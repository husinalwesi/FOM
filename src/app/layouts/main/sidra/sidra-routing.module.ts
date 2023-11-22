import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidraComponent } from './sidra.component';

const routes: Routes = [
  { path: '', component: SidraComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidraRoutingModule { }