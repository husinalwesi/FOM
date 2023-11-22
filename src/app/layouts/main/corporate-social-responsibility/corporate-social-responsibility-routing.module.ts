import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorporateSocialResponsibilityComponent } from './corporate-social-responsibility.component';

const routes: Routes = [
  { path: '', component: CorporateSocialResponsibilityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateSocialResponsibilityRoutingModule { }
