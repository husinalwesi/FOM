import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestETagRoutingModule } from './request-e-tag-routing.module';
import { RequestETagComponent } from './request-e-tag.component';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { FormStepsModule } from 'src/app/modules/form-steps/form-steps.module';
import { CheckboxModule } from 'src/app/modules/checkbox/checkbox.module';
import { RadioBtnModule } from 'src/app/modules/radio-btn/radio-btn.module';
import { FilterDdlModule } from 'src/app/modules/filter-ddl/filter-ddl.module';
import { DdlStanderModule } from 'src/app/modules/ddl-stander/ddl-stander.module';
import { TimePickerModule } from 'src/app/modules/time-picker/time-picker.module';
import { InspectionItemModule } from 'src/app/modules/inspection-item/inspection-item.module';
import { PaginationModule } from 'src/app/modules/pagination/pagination.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { GeneralDetailsModule } from 'src/app/modules/general-details/general-details.module';
import { VehicleDetailsModule } from 'src/app/modules/vehicle-details/vehicle-details.module';
import { BookAppointmentModule } from 'src/app/modules/book-appointment/book-appointment.module';
import { PaymentModule } from 'src/app/modules/payment/payment.module';
import { TermsConditionsTabModule } from 'src/app/modules/terms-conditions-tab/terms-conditions-tab.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SuccessPaymentTabModule } from 'src/app/modules/success-payment-tab/success-payment-tab.module';

@NgModule({
  declarations: [
    RequestETagComponent
  ],
  imports: [
    CommonModule,
    RequestETagRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    SvgModule,
    FormStepsModule,
    CheckboxModule,
    RadioBtnModule,
    FilterDdlModule,
    DdlStanderModule,
    TimePickerModule,
    InspectionItemModule,
    PaginationModule,
    BtnOneModule,
    ModalModule,
    GeneralDetailsModule,
    VehicleDetailsModule,
    BookAppointmentModule,
    PaymentModule,
    TermsConditionsTabModule,
    TranslationModule,
    SuccessPaymentTabModule
  ]
})
export class RequestETagModule { }
