import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    TranslationModule,
    SvgModule,
    CarouselModule
  ],
})
export class HomePageModule { }
