import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KenarMapComponent } from './kenar-map.component';

const routes: Routes = [
  { path: '', component: KenarMapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KenarMapRoutingModule { }