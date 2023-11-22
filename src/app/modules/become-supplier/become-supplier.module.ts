import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BecomeSupplierComponent } from './become-supplier.component';
import { BecomeSupplierItemModule } from '../become-supplier-item/become-supplier-item.module';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { SvgModule } from '../svg/svg.module';
import { ModalModule } from '../modal/modal.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { FormsModule } from '@angular/forms';
import { DatePickerSecondStyleModule } from '../date-picker-second-style/date-picker-second-style.module';
import { BecomeASupplierModalModule } from '../become-a-supplier-modal/become-a-supplier-modal.module';
import { RequestTenderAlertsModalModule } from '../request-tender-alerts-modal/request-tender-alerts-modal.module';
import { SubscriptionModalModule } from '../subscription-modal/subscription-modal.module';
import { ModalDivModule } from '../modal-div/modal-div.module';


@NgModule({
  declarations: [
    BecomeSupplierComponent
  ],
  imports: [
    CommonModule,
    BecomeSupplierItemModule,
    BtnOneModule,
    SvgModule,
    ModalModule,
    TranslationModule,
    FormsModule,
    DatePickerSecondStyleModule,
    BecomeASupplierModalModule,
    RequestTenderAlertsModalModule,
    SubscriptionModalModule,
    ModalDivModule
  ],
  exports: [BecomeSupplierComponent]
})
export class BecomeSupplierModule { }
