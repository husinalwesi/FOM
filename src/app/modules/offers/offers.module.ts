import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    OffersComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    TranslationModule
  ],
  exports: [OffersComponent]
})
export class OffersModule { }
