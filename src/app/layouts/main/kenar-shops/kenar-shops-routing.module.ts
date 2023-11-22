import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KenarShopsComponent } from './kenar-shops.component';

const routes: Routes = [
  { path: '', component: KenarShopsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KenarShopsRoutingModule { }
