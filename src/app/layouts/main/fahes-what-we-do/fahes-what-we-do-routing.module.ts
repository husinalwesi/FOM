import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FahesWhatWeDoComponent } from './fahes-what-we-do.component';

const routes: Routes = [
  { path: '', component: FahesWhatWeDoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FahesWhatWeDoRoutingModule { }
