import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LubricantsRoutingModule } from './lubricants-routing.module';
import { LubricantsComponent } from './lubricants.component';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { CardTwoModule } from 'src/app/modules/card-two/card-two.module';
import { ProductsCarouselModule } from 'src/app/modules/products-carousel/products-carousel.module';
import { OtoLubricantsGalleriesModule } from 'src/app/modules/oto-lubricants-galleries/oto-lubricants-galleries.module';
import { RecaptchModule } from 'src/app/modules/recaptch/recaptch.module';


@NgModule({
  declarations: [
    LubricantsComponent
  ],
  imports: [
    CommonModule,
    LubricantsRoutingModule,
    HeroHalfModule,
    BreadcrumbSectionSecondStyleModule,
    OurStoryModule,
    CardTwoModule,
    ProductsCarouselModule,
    OtoLubricantsGalleriesModule,
    RecaptchModule
  ],

})
export class LubricantsModule { }
