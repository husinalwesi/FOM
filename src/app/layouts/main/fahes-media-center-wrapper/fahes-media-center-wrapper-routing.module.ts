import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FahesMediaCenterWrapperComponent } from './fahes-media-center-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: FahesMediaCenterWrapperComponent,
    children: [
      { path: '', redirectTo: 'news-and-announcements', pathMatch: 'full' },

      { path: 'news-and-announcements', loadChildren: () => import('../fahes-media-center/fahes-media-center.module').then((m) => m.FahesMediaCenterModule) },
      { path: 'events', loadChildren: () => import('../fahes-events/fahes-events.module').then((m) => m.FahesEventsModule) },
      { path: 'multimedia', loadChildren: () => import('../fahes-multimedia/fahes-multimedia.module').then((m) => m.FahesMultimediaModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FahesMediaCenterWrapperRoutingModule { }
