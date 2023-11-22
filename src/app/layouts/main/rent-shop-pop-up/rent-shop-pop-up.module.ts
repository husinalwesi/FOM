import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentShopPopUpComponent } from './rent-shop-pop-up.component';
import { RentShopPopUpRoutingModule } from './rent-shop-pop-up-routing.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { FormStepsModule } from 'src/app/modules/form-steps/form-steps.module';
import { RentShopAttachmentModule } from 'src/app/modules/rent-shop-attachment/rent-shop-attachment.module';
import { BusinessInformationModule } from 'src/app/modules/business-information/business-information.module';
import { PersonalInformationModule } from 'src/app/modules/personal-information/personal-information.module';
import { RentShopInformationModule } from 'src/app/modules/rent-shop-information/rent-shop-information.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { TermsConditionsTabModule } from 'src/app/modules/terms-conditions-tab/terms-conditions-tab.module';
import { SuccessPaymentTabModule } from 'src/app/modules/success-payment-tab/success-payment-tab.module';
import { FormatDateToApiFormatPipe } from 'src/app/pipes/format-date-to-api-format.pipe';

@NgModule({
  declarations: [RentShopPopUpComponent],
  imports: [
    CommonModule,
    RentShopPopUpRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    FormStepsModule,
    RentShopAttachmentModule,
    BusinessInformationModule,
    PersonalInformationModule,
    RentShopInformationModule,
    TranslationModule,
    TermsConditionsTabModule,
    SuccessPaymentTabModule
  ],
  providers: [FormatDateToApiFormatPipe]
})
export class RentShopPopUpModule { }
