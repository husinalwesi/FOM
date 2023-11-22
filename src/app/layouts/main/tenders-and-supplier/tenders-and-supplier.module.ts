import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TendersAndSupplierRoutingModule } from './tenders-and-supplier-routing.module';
import { TendersAndSupplierComponent } from './tenders-and-supplier.component';
// import { HeroBgHalfModule } from 'src/app/modules/hero-bg-half/hero-bg-half.module';
import { BreadcrumbSectionFirstStyleModule } from 'src/app/modules/breadcrumb-section-first-style/breadcrumb-section-first-style.module';
import { OurValuesBtnModule } from 'src/app/modules/our-values-btn/our-values-btn.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { BecomeSupplierModule } from 'src/app/modules/become-supplier/become-supplier.module';
import { FaqModule } from 'src/app/modules/faq/faq.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { PaginationModule } from 'src/app/modules/pagination/pagination.module';
import { FuelPriceModule } from 'src/app/modules/fuel-price/fuel-price.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { TenderSupplierTableModule } from 'src/app/modules/tender-supplier-table/tender-supplier-table.module';
import { TinderTableSectionModule } from 'src/app/modules/tinder-table-section/tinder-table-section.module';
import { FormatDateToApiFormatPipe } from 'src/app/pipes/format-date-to-api-format.pipe';
import { FormsModule } from '@angular/forms';
import { DetailedBodyModule } from 'src/app/modules/detailed-body/detailed-body.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';

@NgModule({
  declarations: [TendersAndSupplierComponent],
  imports: [
    CommonModule,
    TendersAndSupplierRoutingModule,
    // HeroBgHalfModule,
    BreadcrumbSectionFirstStyleModule,
    OurValuesBtnModule,
    OurStoryModule,
    BecomeSupplierModule,
    FaqModule,
    BtnOneModule,
    ModalModule,
    SvgModule,
    PaginationModule,
    FuelPriceModule,
    TranslationModule,
    HeroHalfModule,
    TenderSupplierTableModule,
    TinderTableSectionModule,
    FormsModule,
    DetailedBodyModule,
    BreadcrumbSectionSecondStyleModule
  ],
  providers: [FormatDateToApiFormatPipe, DatePipe]
})
export class TendersAndSupplierModule { }
