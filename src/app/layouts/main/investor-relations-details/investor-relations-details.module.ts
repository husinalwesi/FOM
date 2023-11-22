import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestorRelationsDetailsRoutingModule } from './investor-relations-details-routing.module';
import { InvestorRelationsDetailsComponent } from './investor-relations-details.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { DetailedBodyModule } from 'src/app/modules/detailed-body/detailed-body.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { PaginationModule } from 'src/app/modules/pagination/pagination.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { LinksFilesModule } from 'src/app/modules/links-files/links-files.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';


@NgModule({
  declarations: [
    InvestorRelationsDetailsComponent
  ],
  imports: [
    CommonModule,
    InvestorRelationsDetailsRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    PaginationModule,
    TranslationModule,
    HeroHalfModule,
    DetailedBodyModule,
    LazyLoadImageModule,
    ModalModule,
    SvgModule,
    LinksFilesModule,
    OurStoryModule
  ],
  exports: [InvestorRelationsDetailsComponent]
})
export class InvestorRelationsDetailsModule { }
