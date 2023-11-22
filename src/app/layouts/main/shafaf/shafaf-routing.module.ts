import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShafafComponent } from './shafaf.component';

const routes: Routes = [
  { path: '', component: ShafafComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShafafRoutingModule {

}
