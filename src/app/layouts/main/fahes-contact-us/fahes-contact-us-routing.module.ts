import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FahesContactUsComponent } from './fahes-contact-us.component';


const routes: Routes = [
  { path: '', component: FahesContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FahesContactUsRoutingModule { }
