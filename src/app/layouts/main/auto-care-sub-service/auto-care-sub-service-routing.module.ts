import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCareSubServiceComponent } from './auto-care-sub-service.component';

const routes: Routes = [
  { path: '', component: AutoCareSubServiceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoCareServiceRoutingModule { }
