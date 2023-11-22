import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QpaymentConfirmComponent } from './qpayment-confirm.component';

const routes: Routes = [
  { path: '', component: QpaymentConfirmComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QpaymentConfirmRoutingModule { }
