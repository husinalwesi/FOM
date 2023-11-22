import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos.component';
import { VideosMultimediaModule } from 'src/app/modules/videos-multimedia/videos-multimedia.module';
import { VideosRoutingModule } from './videos-routing.module';

@NgModule({
  declarations: [
    VideosComponent
  ],
  imports: [
    CommonModule,
    VideosMultimediaModule,
    VideosRoutingModule
  ],
  exports: [VideosComponent]
})
export class VideosModule { }
