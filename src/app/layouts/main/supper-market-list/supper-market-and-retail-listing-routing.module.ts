import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupperMarketAndRetailListingComponent } from './supper-market-and-retail-listing.component';

const routes: Routes = [
  { path: '', component: SupperMarketAndRetailListingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupperMarketAndRetailListingRoutingModule { }
