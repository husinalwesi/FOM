import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FahesMediaCenterComponent } from './fahes-media-center.component';

const routes: Routes = [
  { path: '', component: FahesMediaCenterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FahesMediaCenterRoutingModule { }
