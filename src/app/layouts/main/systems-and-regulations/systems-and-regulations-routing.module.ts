import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemsAndRegulationsComponent } from './systems-and-regulations.component';

const routes: Routes = [
  { path: '', component: SystemsAndRegulationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemsAndRegulationsRoutingModule { }
