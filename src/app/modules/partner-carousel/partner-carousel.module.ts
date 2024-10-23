import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerCarouselComponent } from './partner-carousel.component';
import { PartnerItemModule } from "../partner-item/partner-item.module";

@NgModule({
  declarations: [
    PartnerCarouselComponent
  ],
  imports: [
    CommonModule,
    PartnerItemModule
],
  exports: [PartnerCarouselComponent]
})
export class PartnerCarouselModule { }
