import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPageComponent } from './content-page.component';
import { DetailedBodyModule } from '../detailed-body/detailed-body.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    ContentPageComponent
  ],
  imports: [
    CommonModule,
    DetailedBodyModule,
    TranslationModule,
    LazyLoadImageModule
  ],
  exports: [ContentPageComponent]
})
export class ContentPageModule { }
