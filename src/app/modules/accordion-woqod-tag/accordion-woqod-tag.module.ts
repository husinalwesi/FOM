import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionWoqodTagComponent } from './accordion-woqod-tag.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';



@NgModule({
  declarations: [AccordionWoqodTagComponent],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule
  ],
  exports: [AccordionWoqodTagComponent]
})
export class AccordionWoqodTagModule { }
