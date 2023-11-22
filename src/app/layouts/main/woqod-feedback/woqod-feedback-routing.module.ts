import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WoqodFeedbackComponent } from './woqod-feedback.component';

const routes: Routes = [
  { path: '', component: WoqodFeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WoqodFeedbackRoutingModule { }
