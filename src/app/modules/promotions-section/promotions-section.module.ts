import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionsSectionComponent } from './promotions-section.component';
import { RouterModule } from '@angular/router';
import { PromotionListModule } from '../promotion-list/promotion-list.module';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    PromotionsSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PromotionListModule,
    TranslationModule
  ],
  exports: [PromotionsSectionComponent]
})
export class PromotionsSectionModule { }
