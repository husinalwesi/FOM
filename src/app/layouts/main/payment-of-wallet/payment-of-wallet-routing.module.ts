import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentOfWalletComponent } from './payment-of-wallet.component';

const routes: Routes = [
  { path: '', component: PaymentOfWalletComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentOfWalletRoutingModule { }
