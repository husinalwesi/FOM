import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAndServiceComponent } from './product-and-service.component';

const routes: Routes = [
  { path: '', component: ProductAndServiceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductAndServiceRoutingModule { }
