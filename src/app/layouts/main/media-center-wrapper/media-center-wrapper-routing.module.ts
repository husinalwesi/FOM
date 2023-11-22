import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaCenterWrapperComponent } from './media-center-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: MediaCenterWrapperComponent,
    children: [
      { path: '', redirectTo: 'news-and-announcements', pathMatch: 'full' },

      { path: 'news-and-announcements', loadChildren: () => import('../media-center/media-center.module').then((m) => m.MediaCenterModule) },
      { path: 'events', loadChildren: () => import('../events/events.module').then((m) => m.EventsModule) },
      { path: 'multimedia', loadChildren: () => import('../multimedia/multimedia.module').then((m) => m.MultimediaModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaCenterWrapperRoutingModule { }
