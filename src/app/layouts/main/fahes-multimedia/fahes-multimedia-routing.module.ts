import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FahesMultimediaComponent } from './fahes-multimedia.component';

const routes: Routes = [
  { path: '', component: FahesMultimediaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FahesMultimediaRoutingModule { }
