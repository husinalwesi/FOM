import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextImageHalfComponent } from './text-image-half.component';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { DetailedBodyModule } from '../detailed-body/detailed-body.module';

@NgModule({
  declarations: [
    TextImageHalfComponent
  ],
  imports: [
    CommonModule,
    BtnOneModule,
    TranslationModule,
    LazyLoadImageModule,
    DetailedBodyModule
  ],
  exports: [TextImageHalfComponent]
})
export class TextImageHalfModule { }
