import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriesComponent } from './galleries.component';
import { GalleriesMultimediaModule } from 'src/app/modules/galleries-multimedia/galleries-multimedia.module';
import { GalleriesRoutingModule } from './galleries-routing.module';



@NgModule({
  declarations: [
    GalleriesComponent
  ],
  imports: [
    CommonModule,
    GalleriesMultimediaModule,
    GalleriesRoutingModule
  ],
  exports: [GalleriesComponent]
})
export class GalleriesModule { }
