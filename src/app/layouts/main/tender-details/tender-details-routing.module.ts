import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenderDetailsComponent } from './tender-details.component';

const routes: Routes = [
  { path: '', component: TenderDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenderDetailsRoutingModule { }
