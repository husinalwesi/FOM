
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErmComponent } from './erm.component';


const routes: Routes = [
  { path: '', component: ErmComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErmRoutingModule { }
