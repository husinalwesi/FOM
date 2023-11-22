import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeasingPropertyComponent } from './leasing-property.component';
import { PetrolStationItemModule } from '../petrol-station-item/petrol-station-item.module';
import { PaginationModule } from '../pagination/pagination.module';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { SvgModule } from '../svg/svg.module';
import { ComponentLoaderModule } from '../component-loader/component-loader.module';
import { NoDataModule } from '../no-data/no-data.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { DdlStanderModule } from '../ddl-stander/ddl-stander.module';

@NgModule({
  declarations: [
    LeasingPropertyComponent
  ],
  imports: [
    CommonModule,
    PetrolStationItemModule,
    PaginationModule,
    BtnOneModule,
    SvgModule,
    ComponentLoaderModule,
    NoDataModule,
    TranslateModule,
    FormsModule,
    DdlStanderModule
  ],
  exports: [LeasingPropertyComponent]
})
export class LeasingPropertyModule { }
