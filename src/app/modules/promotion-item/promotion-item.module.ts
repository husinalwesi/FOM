import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionItemComponent } from './promotion-item.component';
import { SvgModule } from '../svg/svg.module';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [PromotionItemComponent],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    TranslationModule,
    LazyLoadImageModule
  ],
  exports: [PromotionItemComponent]
})
export class PromotionItemModule { }
