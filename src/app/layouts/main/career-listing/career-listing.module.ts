import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerListingComponent } from './career-listing.component';
import { CareerListingRoutingModule } from './career-listing-routing.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { TenderInformationModule } from 'src/app/modules/tender-information/tender-information.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { DetailedBodyModule } from 'src/app/modules/detailed-body/detailed-body.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';



@NgModule({
  declarations: [CareerListingComponent],
  imports: [
    CommonModule,
    CareerListingRoutingModule,
    BtnOneModule,
    ModalModule,
    SvgModule,
    TenderInformationModule,
    TranslationModule,
    DetailedBodyModule,
    BreadcrumbSectionSecondStyleModule
  ]
})
export class CareerListingModule { }
