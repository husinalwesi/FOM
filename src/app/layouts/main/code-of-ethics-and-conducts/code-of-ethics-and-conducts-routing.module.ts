import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeOfEthicsAndConductsComponent } from './code-of-ethics-and-conducts.component';

const routes: Routes = [
  { path: '', component: CodeOfEthicsAndConductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeOfEthicsAndConductsRoutingModule { }
