
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersHomepageComponent } from './careers-homepage.component';



const routes: Routes = [
  { path: '', component: CareersHomepageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareersHomepageRoutingModule { }