import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BecomeARetailSupplierContentComponent } from './become-a-retail-supplier-content.component';
import { SvgModule } from '../svg/svg.module';
import { DdlStanderModule } from '../ddl-stander/ddl-stander.module';
import { FormsModule } from '@angular/forms';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { DatePickerFifthStyleModule } from '../date-picker-fifth-style/date-picker-fifth-style.module';
import { AttachmentModule } from '../attachment/attachment.module';
import { FormatDateToApiFormatPipe } from 'src/app/pipes/format-date-to-api-format.pipe';
import { DirectivesModule } from '../directives/directives.module';
import { DdlStanderMultiModule } from '../ddl-stander-multi/ddl-stander-multi.module';
import { RouterLink } from '@angular/router';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [BecomeARetailSupplierContentComponent],
  imports: [
    CommonModule,
    SvgModule,
    DdlStanderModule,
    FormsModule,
    TranslationModule,
    DatePickerFifthStyleModule,
    AttachmentModule,
    DirectivesModule,
    DdlStanderMultiModule,
    RouterLink,
    ModalModule
  ],
  exports: [BecomeARetailSupplierContentComponent],
  providers: [FormatDateToApiFormatPipe]
})
export class BecomeARetailSupplierContentModule { }
