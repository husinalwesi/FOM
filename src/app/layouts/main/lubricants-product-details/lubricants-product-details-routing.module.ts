import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LubricantsProductDetailsComponent } from './lubricants-product-details.component';

const routes: Routes = [
  { path: '', component: LubricantsProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LubricantsProductDetailsRoutingModule { }
