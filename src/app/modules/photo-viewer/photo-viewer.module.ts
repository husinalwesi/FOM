import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoViewerComponent } from './photo-viewer.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { TranslationModule } from 'src/app/i18n/translation.module';



@NgModule({
  declarations: [
    PhotoViewerComponent
  ],
  imports: [
    CommonModule,
    LazyLoadImageModule,
    TranslationModule
  ],
  exports: [PhotoViewerComponent]
})
export class PhotoViewerModule { }
