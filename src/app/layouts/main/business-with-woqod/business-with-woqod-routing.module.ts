import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessWithWoqodComponent } from './business-with-woqod.component';

const routes: Routes = [
  { path: '', component: BusinessWithWoqodComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessWithWoqodRoutingModule { }
