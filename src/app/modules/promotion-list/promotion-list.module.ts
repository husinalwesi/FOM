import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionListComponent } from './promotion-list.component';
import { PromotionItemModule } from '../promotion-item/promotion-item.module';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    PromotionListComponent
  ],
  imports: [
    CommonModule,
    PromotionItemModule,
    TranslationModule
  ],
  exports: [PromotionListComponent]
})
export class PromotionListModule { }
