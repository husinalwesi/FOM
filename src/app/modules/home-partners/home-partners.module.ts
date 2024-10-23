import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePartnersComponent } from './home-partners.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { PartnerCarouselModule } from "../partner-carousel/partner-carousel.module";

@NgModule({
  declarations: [
    HomePartnersComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    TranslationModule,
    PartnerCarouselModule,
],
  exports: [HomePartnersComponent]
})
export class HomePartnersModule { }
