import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FahesEventsComponent } from './fahes-events.component';

const routes: Routes = [
  { path: '', component: FahesEventsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FahesEventsRoutingModule { }
