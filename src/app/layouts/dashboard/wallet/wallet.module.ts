import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { WalletRoutingModule } from './wallet-routing.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { TableComponent } from '../components/table/table.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { DdlStyleSecondModule } from 'src/app/modules/ddl-style-second/ddl-style-second.module';
import { NoDataModule } from 'src/app/modules/no-data/no-data.module';
import { SearchWDdlModule } from 'src/app/modules/search-w-ddl/search-w-ddl.module';
import { PaginationSecondStyleModule } from 'src/app/modules/pagination-second-style/pagination-second-style.module';



@NgModule({
  declarations: [
    WalletComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    SvgModule,
    TranslationModule,
    DdlStyleSecondModule,
    NoDataModule,
    SearchWDdlModule,
    PaginationSecondStyleModule
  ],
  exports:[WalletComponent]
})
export class WalletModule { }
