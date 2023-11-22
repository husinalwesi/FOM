import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestorRelationsComponent } from './investor-relations.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { PaginationModule } from 'src/app/modules/pagination/pagination.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { InvestorRelationsRoutingModule } from './investor-relations-routing.module';
import { DetailedBodyModule } from 'src/app/modules/detailed-body/detailed-body.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { BecomeSupplierModule } from 'src/app/modules/become-supplier/become-supplier.module';
import { GalleriesPagesModule } from 'src/app/modules/galleries-pages/galleries-pages.module';


@NgModule({
  declarations: [
    InvestorRelationsComponent
  ],
  imports: [
    CommonModule,
    InvestorRelationsRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    HeroHalfModule,
    DetailedBodyModule,
    OurStoryModule,
    BecomeSupplierModule,
    GalleriesPagesModule
  ],
  exports: [InvestorRelationsComponent]
})
export class InvestorRelationsModule { }
