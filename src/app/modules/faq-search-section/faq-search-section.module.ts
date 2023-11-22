import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqSearchSectionComponent } from './faq-search-section.component';
import { SvgModule } from '../svg/svg.module';
import { FormsModule } from '@angular/forms';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FaqSearchSectionComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    FormsModule,
    TranslationModule,
    RouterModule
  ],
  exports: [FaqSearchSectionComponent]
})
export class FaqSearchSectionModule { }
