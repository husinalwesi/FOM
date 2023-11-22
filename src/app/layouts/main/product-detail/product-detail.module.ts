import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { OurValuesModule } from 'src/app/modules/our-values/our-values.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { DetailedBodyModule } from 'src/app/modules/detailed-body/detailed-body.module';



@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    HeroHalfModule,
    BreadcrumbSectionSecondStyleModule,
    OurStoryModule,
    OurValuesModule,
    TranslationModule,
    BtnOneModule,
    DetailedBodyModule
  ]
})
export class ProductDetailModule { }
