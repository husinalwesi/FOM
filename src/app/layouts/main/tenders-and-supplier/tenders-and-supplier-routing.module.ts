import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TendersAndSupplierComponent } from './tenders-and-supplier.component';

const routes: Routes = [
  { path: '', component: TendersAndSupplierComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TendersAndSupplierRoutingModule { }