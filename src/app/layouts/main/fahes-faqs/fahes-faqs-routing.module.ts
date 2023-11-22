import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FahesFaqsComponent } from './fahes-faqs.component';

const routes: Routes = [
  { path: '', component: FahesFaqsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FahesFaqsRoutingModule { }
