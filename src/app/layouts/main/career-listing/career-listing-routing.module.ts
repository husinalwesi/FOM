
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerListingComponent } from './career-listing.component';

const routes: Routes = [
  { path: '', component: CareerListingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerListingRoutingModule { }