import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgModule } from '../svg/svg.module';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RelatedNewsComponent } from './related-news.component';
import { CardWCategoryModule } from '../card-w-category/card-w-category.module';


@NgModule({
  declarations: [RelatedNewsComponent],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    TranslationModule,
    CardWCategoryModule
  ],
  exports: [RelatedNewsComponent]
})
export class RelatedNewsModule { }
