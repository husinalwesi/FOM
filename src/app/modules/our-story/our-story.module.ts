import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurStoryComponent } from './our-story.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { DetailedBodyModule } from '../detailed-body/detailed-body.module';

@NgModule({
  declarations: [
    OurStoryComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    BtnOneModule,
    RouterModule,
    LazyLoadImageModule,
    DetailedBodyModule
  ],
  exports: [OurStoryComponent]
})
export class OurStoryModule { }
