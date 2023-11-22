import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiveZeroThreeComponent } from './five-zero-three.component';

const routes: Routes = [
  {
    path: '', component: FiveZeroThreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiveZeroThreeRoutingModule { }
