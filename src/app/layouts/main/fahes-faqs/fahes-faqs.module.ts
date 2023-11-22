import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FahesFaqsRoutingModule } from './fahes-faqs-routing.module';
import { FahesFaqsComponent } from './fahes-faqs.component';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { FaqSearchSectionModule } from 'src/app/modules/faq-search-section/faq-search-section.module';
import { OurValuesModule } from 'src/app/modules/our-values/our-values.module';
import { FilterFaqModule } from 'src/app/modules/filter-faq/filter-faq.module';
import { FaqModule } from 'src/app/modules/faq/faq.module';
import { TranslationModule } from 'src/app/i18n/translation.module';


@NgModule({
  declarations: [
    FahesFaqsComponent
  ],
  imports: [
    CommonModule,
    FahesFaqsRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    FaqSearchSectionModule,
    OurValuesModule,
    FilterFaqModule,
    FaqModule,
    TranslationModule
  ]
})
export class FahesFaqsModule { }
