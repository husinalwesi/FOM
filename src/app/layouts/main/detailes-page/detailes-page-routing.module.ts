import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailesPageComponent } from './detailes-page.component';

const routes: Routes = [
  { path: '', component: DetailesPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DetailesPageRoutingModule { }
