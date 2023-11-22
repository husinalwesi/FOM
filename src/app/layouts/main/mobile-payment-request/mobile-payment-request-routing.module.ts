import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobilePaymentRequestComponent } from './mobile-payment-request.component';

const routes: Routes = [
  { path: '', component: MobilePaymentRequestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobilePaymentRequestRoutingModule { }
