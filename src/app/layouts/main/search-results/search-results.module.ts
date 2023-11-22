import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultsRoutingModule } from './search-results-routing.module';
import { SearchResultsComponent } from './search-results.component';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { FilterFaqModule } from 'src/app/modules/filter-faq/filter-faq.module';
import { PaginationModule } from 'src/app/modules/pagination/pagination.module';
import { TranslateModule } from '@ngx-translate/core';
import { SocialAccountWidgetModule } from 'src/app/modules/social-account-widget/social-account-widget.module';
import { SearchResultItemModule } from 'src/app/modules/search-result-item/search-result-item.module';
import { NoDataModule } from 'src/app/modules/no-data/no-data.module';
import { ComponentLoaderModule } from 'src/app/modules/component-loader/component-loader.module';
import { LoaderTwoModule } from 'src/app/modules/loader-two/loader-two.module';


@NgModule({
  declarations: [
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    SearchResultsRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    FilterFaqModule,
    TranslateModule,
    PaginationModule,
    SocialAccountWidgetModule,
    SearchResultItemModule,
    NoDataModule,
    ComponentLoaderModule,
    LoaderTwoModule
  ]
})
export class SearchResultsModule { }
