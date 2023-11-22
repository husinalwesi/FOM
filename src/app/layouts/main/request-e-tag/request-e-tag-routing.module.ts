import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestETagComponent } from './request-e-tag.component';

const routes: Routes = [
  { path: '', component: RequestETagComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestETagRoutingModule { }
