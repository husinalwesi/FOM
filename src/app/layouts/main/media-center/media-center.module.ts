import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaCenterComponent } from './media-center.component';
import { MediaCenterRoutingModule } from './media-center-routing.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { LineOfYearsNewsComponent } from 'src/app/components/line-of-years-news/line-of-years-news.component';
import { BreadcrumbSectionFirstStyleModule } from 'src/app/modules/breadcrumb-section-first-style/breadcrumb-section-first-style.module';
import { PaginationModule } from 'src/app/modules/pagination/pagination.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { HeroBgHalfModule } from 'src/app/modules/hero-bg-half/hero-bg-half.module';
import { BoxsIconNewsModule } from 'src/app/modules/boxs-icon-news/boxs-icon-news.module';
import { CardWCategoryModule } from 'src/app/modules/card-w-category/card-w-category.module';
import { NoDataModule } from 'src/app/modules/no-data/no-data.module';
import { ComponentLoaderModule } from 'src/app/modules/component-loader/component-loader.module';
import { FormatDateToApiFormatPipe } from 'src/app/pipes/format-date-to-api-format.pipe';

@NgModule({
  declarations: [
    MediaCenterComponent,
    LineOfYearsNewsComponent,
  ],
  imports: [
    CommonModule,
    MediaCenterRoutingModule,
    TranslationModule,
    SvgModule,
    BreadcrumbSectionFirstStyleModule,
    PaginationModule,
    BtnOneModule,
    HeroBgHalfModule,
    BoxsIconNewsModule,
    CardWCategoryModule,
    NoDataModule,
    ComponentLoaderModule
  ],
  providers: [FormatDateToApiFormatPipe]
})
export class MediaCenterModule { }
