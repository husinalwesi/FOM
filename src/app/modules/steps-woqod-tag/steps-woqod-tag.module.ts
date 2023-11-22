import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgModule } from '../svg/svg.module';
import { StepsWoqodTagComponent } from './steps-woqod-tag.component';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [StepsWoqodTagComponent],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule
  ],
  exports: [StepsWoqodTagComponent]
})
export class StepsWoqodTagModule { }
