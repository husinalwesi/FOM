import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetOurTeamComponent } from './meet-our-team.component';

const routes: Routes = [
  { path: '', component: MeetOurTeamComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetOurTeamRoutingModule { }
