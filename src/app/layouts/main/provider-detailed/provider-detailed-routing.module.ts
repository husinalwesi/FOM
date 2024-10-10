import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderDetailedComponent } from './provider-detailed.component';

const routes: Routes = [
  { path: '', component: ProviderDetailedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderDetailedRoutingModule { }
