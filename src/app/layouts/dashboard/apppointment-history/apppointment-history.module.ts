import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApppointmentHistoryRoutingModule } from './apppointment-history-routing.module';
import { ApppointmentHistoryComponent } from './apppointment-history.component';
import { TabsModule } from '../components/tabs/tabs.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { DdlStyleSecondModule } from 'src/app/modules/ddl-style-second/ddl-style-second.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SearchWDdlModule } from 'src/app/modules/search-w-ddl/search-w-ddl.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { NoDataModule } from 'src/app/modules/no-data/no-data.module';
import { StaticMapModule } from 'src/app/modules/static-map/static-map.module';


@NgModule({
  declarations: [
    ApppointmentHistoryComponent
  ],
  imports: [
    CommonModule,
    ApppointmentHistoryRoutingModule,
    SvgModule,
    TabsModule,
    DdlStyleSecondModule,
    TranslationModule,
    SearchWDdlModule,
    ModalModule,
    NoDataModule,
    StaticMapModule
  ]
})
export class ApppointmentHistoryModule { }
