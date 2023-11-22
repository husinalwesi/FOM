import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourZeroOneComponent } from './four-zero-one.component';

const routes: Routes = [
  {
    path: '', component: FourZeroOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FourZeroOneRoutingModule { }
