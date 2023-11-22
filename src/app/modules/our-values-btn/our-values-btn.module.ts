import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurValuesBtnComponent } from './our-values-btn.component';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [OurValuesBtnComponent],
  imports: [
    CommonModule,
    BtnOneModule,
    SvgModule,
    TranslationModule,
    LazyLoadImageModule
  ],
  exports: [OurValuesBtnComponent]
})
export class OurValuesBtnModule { }
