import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FahesAboutUsComponent } from './fahes-about-us.component';

const routes: Routes = [
  { path: '', component: FahesAboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FahesAboutUsRoutingModule { }
