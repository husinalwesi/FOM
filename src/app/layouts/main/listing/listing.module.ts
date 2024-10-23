import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { ListingComponent } from './listing.component';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { ListingItemModule } from "../../../modules/listing-item/listing-item.module";
import { PaginationModule } from "../../../modules/pagination/pagination.module";
import { ListingFilterModule } from "../../../modules/listing-filter/listing-filter.module";


@NgModule({
  declarations: [
    ListingComponent
  ],
  imports: [
    CommonModule,
    ListingRoutingModule,
    SvgModule,
    ListingItemModule,
    PaginationModule,
    ListingFilterModule
]
})
export class ListingModule { }
