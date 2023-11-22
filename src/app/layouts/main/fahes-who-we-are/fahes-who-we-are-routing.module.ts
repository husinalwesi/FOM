import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FahesWhoWeAreComponent } from './fahes-who-we-are.component';

const routes: Routes = [
  { path: '', component: FahesWhoWeAreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FahesWhoWeAreRoutingModule { }
