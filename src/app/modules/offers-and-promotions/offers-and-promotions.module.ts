import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersAndPromotionsComponent } from './offers-and-promotions.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OffersAndPromotionsComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    TranslationModule,
    LazyLoadImageModule,
    RouterModule
  ],
  exports: [OffersAndPromotionsComponent]
})
export class OffersAndPromotionsModule { }
