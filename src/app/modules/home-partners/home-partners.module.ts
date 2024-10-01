import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePartnersComponent } from './home-partners.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    HomePartnersComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    TranslationModule
  ],
  exports: [HomePartnersComponent]
})
export class HomePartnersModule { }
