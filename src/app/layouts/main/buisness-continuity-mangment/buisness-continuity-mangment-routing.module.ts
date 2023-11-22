import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuisnessContinuityMangmentComponent } from './buisness-continuity-mangment.component';

const routes: Routes = [
  { path: '', component: BuisnessContinuityMangmentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuisnessContinuityMangmentRoutingModule { }