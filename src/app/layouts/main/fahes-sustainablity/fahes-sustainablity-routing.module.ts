import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FahesSustainablityComponent } from './fahes-sustainablity.component';

const routes: Routes = [
  { path: '', component: FahesSustainablityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FahesSustainablityRoutingModule { }
