import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesTrafficServiceComponent } from './fahes-traffic-service.component';
import { FahesTrafficServiceRoutingModule } from './fahes-traffic-service-routing.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { PaginationModule } from 'src/app/modules/pagination/pagination.module';
import { DdlStyleSecondModule } from 'src/app/modules/ddl-style-second/ddl-style-second.module';
import { FilterDdlModule } from 'src/app/modules/filter-ddl/filter-ddl.module';
import { FahesStoryModule } from 'src/app/modules/fahes-story/fahes-story.module';
import { EthicItemModule } from 'src/app/modules/ethic-item/ethic-item.module';
import { SearchWDdlModule } from 'src/app/modules/search-w-ddl/search-w-ddl.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    FahesTrafficServiceComponent
  ],
  imports: [
    CommonModule,
    FahesTrafficServiceRoutingModule,
    HeroHalfModule,
    BreadcrumbSectionSecondStyleModule,
    SvgModule,
    TranslationModule,
    PaginationModule,
    DdlStyleSecondModule,
    FilterDdlModule,
    FahesStoryModule,
    EthicItemModule,
    SearchWDdlModule,
    LazyLoadImageModule
  ]
})
export class FahesTrafficServiceModule { }
