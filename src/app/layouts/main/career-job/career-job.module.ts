import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerJobComponent } from './career-job.component';
import { CareerJobRoutingModule } from './career-job-routing.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { FormsModule } from '@angular/forms';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { AttachmentSecondStyleModule } from 'src/app/modules/attachment-second-style/attachment-second-style.module';
import { DdlStyleTwoModule } from 'src/app/modules/ddl-style-two/ddl-style-two.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { DirectivesModule } from 'src/app/modules/directives/directives.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';



@NgModule({
  declarations: [
    CareerJobComponent
  ],
  imports: [
    CommonModule,
    CareerJobRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    BtnOneModule,
    FormsModule,
    TranslationModule,
    SvgModule,
    AttachmentSecondStyleModule,
    DdlStyleTwoModule,
    DirectivesModule,
    ModalModule
  ]
})
export class CareerJobModule { }
