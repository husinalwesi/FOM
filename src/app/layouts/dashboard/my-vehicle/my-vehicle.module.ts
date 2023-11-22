import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyVehicleComponent } from './my-vehicle.component';
import { MyVehicleRoutingModule } from './my-vehicle-routing.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { PaginationSecondStyleModule } from 'src/app/modules/pagination-second-style/pagination-second-style.module';
import { DdlStyleSecondModule } from 'src/app/modules/ddl-style-second/ddl-style-second.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SearchWDdlModule } from 'src/app/modules/search-w-ddl/search-w-ddl.module';
import { NoDataModule } from 'src/app/modules/no-data/no-data.module';



@NgModule({
  declarations: [
    MyVehicleComponent
  ],
  imports: [
    CommonModule,
    MyVehicleRoutingModule,
    SvgModule,
    PaginationSecondStyleModule,
    DdlStyleSecondModule,
    TranslationModule,
    SearchWDdlModule,
    NoDataModule
  ]
})
export class MyVehicleModule { }
