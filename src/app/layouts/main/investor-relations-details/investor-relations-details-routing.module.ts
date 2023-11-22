import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestorRelationsDetailsComponent } from './investor-relations-details.component';

const routes: Routes = [
  { path: '', component: InvestorRelationsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestorRelationsDetailsRoutingModule { }
