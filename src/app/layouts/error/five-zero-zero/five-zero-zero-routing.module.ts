import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiveZeroZeroComponent } from './five-zero-zero.component';

const routes: Routes = [
  {
    path: '', component: FiveZeroZeroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiveZeroZeroRoutingModule { }
