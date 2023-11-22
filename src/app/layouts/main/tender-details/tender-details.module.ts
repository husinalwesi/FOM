import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenderDetailsRoutingModule } from './tender-details-routing.module';
import { TenderDetailsComponent } from './tender-details.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BreadcrumbSectionFirstStyleModule } from 'src/app/modules/breadcrumb-section-first-style/breadcrumb-section-first-style.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { TenderInformationModule } from 'src/app/modules/tender-information/tender-information.module';
import { TenderInformatonNewModule } from 'src/app/modules/tender-informaton-new/tender-informaton-new.module';
import { DetailedBodyModule } from 'src/app/modules/detailed-body/detailed-body.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';


@NgModule({
  declarations: [
    TenderDetailsComponent
  ],
  imports: [
    CommonModule,
    TenderDetailsRoutingModule,
    BreadcrumbSectionFirstStyleModule,
    BtnOneModule,
    ModalModule,
    SvgModule,
    TenderInformationModule,
    TranslationModule,
    TenderInformatonNewModule,
    DetailedBodyModule,
    BreadcrumbSectionSecondStyleModule
  ]
})
export class TenderDetailsModule { }
