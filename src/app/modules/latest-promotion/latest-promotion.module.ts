import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestPromotionComponent } from './latest-promotion.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    LatestPromotionComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    RouterModule,
    LazyLoadImageModule
  ],
  exports: [LatestPromotionComponent]
})
export class LatestPromotionModule { }
