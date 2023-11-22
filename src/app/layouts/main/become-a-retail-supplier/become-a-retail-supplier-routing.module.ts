import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BecomeARetailSupplierComponent } from './become-a-retail-supplier.component';

const routes: Routes = [
  { path: '', component: BecomeARetailSupplierComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BecomeARetailSupplierRoutingModule { }