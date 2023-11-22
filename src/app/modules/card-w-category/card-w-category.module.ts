import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgModule } from '../svg/svg.module';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { CardWCategoryComponent } from './card-w-category.component';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [CardWCategoryComponent],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    TranslationModule,
    BtnOneModule,
    LazyLoadImageModule
  ],
  exports: [CardWCategoryComponent]
})
export class CardWCategoryModule { }