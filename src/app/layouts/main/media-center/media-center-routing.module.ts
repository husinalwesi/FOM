import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaCenterComponent } from './media-center.component';

const routes: Routes = [
  { path: '', component: MediaCenterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaCenterRoutingModule { }
