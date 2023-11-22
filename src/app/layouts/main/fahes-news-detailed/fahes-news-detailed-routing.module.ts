import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FahesNewsDetailedComponent } from './fahes-news-detailed.component';

const routes: Routes = [
  { path: '', component: FahesNewsDetailedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FahesNewsDetailedRoutingModule { }
