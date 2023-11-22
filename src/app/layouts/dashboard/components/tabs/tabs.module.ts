import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { DdlStanderModule } from 'src/app/modules/ddl-stander/ddl-stander.module';
import { CheckboxModule } from 'src/app/modules/checkbox/checkbox.module';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    SvgModule,
    DdlStanderModule,
    CheckboxModule,
    TranslationModule
  ],
  exports: [TabsComponent]
})
export class TabsModule { }
