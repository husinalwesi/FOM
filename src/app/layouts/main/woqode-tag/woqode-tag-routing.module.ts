import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WoqodeTagComponent } from './woqode-tag.component';

const routes: Routes = [
  { path: '', component: WoqodeTagComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WoqodeTagRoutingModule { }