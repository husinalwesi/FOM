import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestorRelationsComponent } from './investor-relations.component';
const routes: Routes = [
  { path: '', component: InvestorRelationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestorRelationsRoutingModule { }