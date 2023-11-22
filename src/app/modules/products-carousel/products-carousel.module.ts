import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCarouselComponent } from './products-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RouterModule } from '@angular/router';
import { SvgModule } from '../svg/svg.module';
import { CardTwoModule } from '../card-two/card-two.module';



@NgModule({
  declarations: [
    ProductsCarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    TranslationModule,
    RouterModule,
    SvgModule,
    TranslationModule,
    CardTwoModule
  ],
  exports: [ProductsCarouselComponent]
})
export class ProductsCarouselModule { }
