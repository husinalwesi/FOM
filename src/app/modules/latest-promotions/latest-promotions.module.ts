import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestPromotionsComponent } from './latest-promotions.component';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { OffersModule } from '../offers/offers.module';
import { DetailedBodyModule } from '../detailed-body/detailed-body.module';

@NgModule({
  declarations: [
    LatestPromotionsComponent
  ],
  imports: [
    CommonModule,
    BtnOneModule,
    OffersModule,
    DetailedBodyModule
  ],
  exports: [LatestPromotionsComponent]
})
export class LatestPromotionsModule { }
