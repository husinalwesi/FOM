import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutQpayComponent } from './checkout-qpay.component';

const routes: Routes = [
  { path: '', component: CheckoutQpayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutQpayRoutingModule { }
