import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingFilterComponent } from './listing-filter.component';
import { SvgModule } from '../svg/svg.module';



@NgModule({
  declarations: [
    ListingFilterComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [ListingFilterComponent]
})
export class ListingFilterModule { }
