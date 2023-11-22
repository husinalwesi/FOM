import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionsSequareComponent } from './promotions-sequare.component';
import { SvgModule } from '../svg/svg.module';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    PromotionsSequareComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    TranslationModule
  ],
  exports: [PromotionsSequareComponent]
})
export class PromotionsSequareModule { }
