import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingItemComponent } from './listing-item.component';
import { SvgModule } from '../svg/svg.module';



@NgModule({
  declarations: [
    ListingItemComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [ListingItemComponent]
})
export class ListingItemModule { }
