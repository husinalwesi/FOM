import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShafafRoutingModule } from './shafaf-routing.module';
import { ShafafComponent } from './shafaf.component';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { TextImageHalfModule } from 'src/app/modules/text-image-half/text-image-half.module';
import { CardWCategoryModule } from 'src/app/modules/card-w-category/card-w-category.module';
import { CardAccessoriesModule } from 'src/app/modules/card-accessories/card-accessories.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';


@NgModule({
  declarations: [
    ShafafComponent
  ],
  imports: [
    CommonModule,
    ShafafRoutingModule,
    HeroHalfModule,
    BreadcrumbSectionSecondStyleModule,
    OurStoryModule,
    TextImageHalfModule,
    CardWCategoryModule,
    CardAccessoriesModule,
    TranslationModule,
    BtnOneModule,
    LazyLoadImageModule
  ]
})
export class ShafafModule { }
