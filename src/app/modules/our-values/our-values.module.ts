import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurValuesComponent } from './our-values.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from '../svg/svg.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    OurValuesComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    SvgModule,
    CarouselModule
  ],
  exports: [OurValuesComponent]
})
export class OurValuesModule { }
