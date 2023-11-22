import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { TemplateRoutingModule } from './template-routing.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { CheckboxModule } from 'src/app/modules/checkbox/checkbox.module';

@NgModule({
  declarations: [
    TemplateComponent,
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    SvgModule,
    TranslationModule,
    BtnOneModule,
    ModalModule,
    CheckboxModule
  ]
})
export class TemplateModule { }
