
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultimediaComponent } from './multimedia.component';


const routes: Routes = [
  {
    path: '',
    component: MultimediaComponent,
    children: [
      { path: '', redirectTo: 'videos', pathMatch: 'full' },

      { path: 'videos', loadChildren: () => import('./components/videos/videos.module').then((m) => m.VideosModule) },
      { path: 'galleries', loadChildren: () => import('./components/galleries/galleries.module').then((m) => m.GalleriesModule) },
      { path: 'images', loadChildren: () => import('./components/images/images.module').then((m) => m.ImagesModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultimediaRoutingModule { }
