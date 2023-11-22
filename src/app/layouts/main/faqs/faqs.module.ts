import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faqs.component';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { FaqSearchSectionModule } from 'src/app/modules/faq-search-section/faq-search-section.module';
import { OurValuesModule } from 'src/app/modules/our-values/our-values.module';
import { FilterFaqModule } from 'src/app/modules/filter-faq/filter-faq.module';
import { FaqModule } from 'src/app/modules/faq/faq.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { PaginationModule } from 'src/app/modules/pagination/pagination.module';

@NgModule({
  declarations: [
    FaqsComponent
  ],
  imports: [
    CommonModule,
    FaqsRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    FaqSearchSectionModule,
    OurValuesModule,
    FilterFaqModule,
    FaqModule,
    TranslationModule,
    PaginationModule
  ]
})
export class FaqsModule { }
