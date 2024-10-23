import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { SearchItemModule } from "../../../modules/search-item/search-item.module";


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SvgModule,
    SearchItemModule
]
})
export class SearchModule { }
