import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentShopPopUpComponent } from './rent-shop-pop-up.component';

const routes: Routes = [
  { path: '', component: RentShopPopUpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentShopPopUpRoutingModule { }