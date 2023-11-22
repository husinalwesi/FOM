import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasRetailersComponent } from './gas-retailers.component';

const routes: Routes = [
  { path: '', component: GasRetailersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GasRetailersRoutingModule { }