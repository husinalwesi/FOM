import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images.component';
import { EventImagesModule } from 'src/app/modules/event-images/event-images.module';
import { ImagesRoutingModule } from './images-routing.module';



@NgModule({
  declarations: [
    ImagesComponent
  ],
  imports: [
    CommonModule,
    EventImagesModule,
    ImagesRoutingModule
  ],
  exports: [ImagesComponent]
})
export class ImagesModule { }
