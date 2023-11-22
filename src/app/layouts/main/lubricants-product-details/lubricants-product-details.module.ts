import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LubricantsProductDetailsRoutingModule } from './lubricants-product-details-routing.module';
import { LubricantsProductDetailsComponent } from './lubricants-product-details.component';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { CardTwoModule } from 'src/app/modules/card-two/card-two.module';
import { OtoLubricantsGalleriesModule } from 'src/app/modules/oto-lubricants-galleries/oto-lubricants-galleries.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { ProductsCarouselModule } from 'src/app/modules/products-carousel/products-carousel.module';
import { PhotoViewerModule } from 'src/app/modules/photo-viewer/photo-viewer.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';


@NgModule({
  declarations: [
    LubricantsProductDetailsComponent
  ],
  imports: [
    CommonModule,
    LubricantsProductDetailsRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    OurStoryModule,
    CardTwoModule,
    ProductsCarouselModule,
    OtoLubricantsGalleriesModule,
    PhotoViewerModule,
    TranslationModule,
    SvgModule
  ]
})
export class LubricantsProductDetailsModule { }
