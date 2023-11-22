import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCareServiceComponent } from './auto-care-service.component';


const routes: Routes = [
  { path: '', component: AutoCareServiceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoCareServiceRoutingModule { }
