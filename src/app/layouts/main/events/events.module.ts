import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EventsRoutingModule } from './events-routing.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { HeroBgHalfModule } from 'src/app/modules/hero-bg-half/hero-bg-half.module';
import { EventsComponent } from './events.component';
import { BreadcrumbSectionFirstStyleModule } from 'src/app/modules/breadcrumb-section-first-style/breadcrumb-section-first-style.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { PaginationModule } from 'src/app/modules/pagination/pagination.module';
import { BoxsIconNewsModule } from 'src/app/modules/boxs-icon-news/boxs-icon-news.module';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { CardWCategoryModule } from 'src/app/modules/card-w-category/card-w-category.module';
import { DatePickerThirdStyleModule } from 'src/app/modules/date-picker-third-style/date-picker-third-style.module';
import { FormsModule } from '@angular/forms';
import { NoDataModule } from 'src/app/modules/no-data/no-data.module';
import { ComponentLoaderModule } from 'src/app/modules/component-loader/component-loader.module';
import { FormatDateToApiFormatPipe } from 'src/app/pipes/format-date-to-api-format.pipe';

@NgModule({
  declarations: [
    EventsComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    TranslationModule,
    SvgModule,
    HeroBgHalfModule,
    BreadcrumbSectionFirstStyleModule,
    PaginationModule,
    BtnOneModule,
    BoxsIconNewsModule,
    CardWCategoryModule,
    DatePickerThirdStyleModule,
    FormsModule,
    NoDataModule,
    ComponentLoaderModule
  ],
  providers: [FormatDateToApiFormatPipe]
})
export class EventsModule { }
