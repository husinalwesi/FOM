import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    StatisticsComponent,

  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    SvgModule,
    CarouselModule,
    RouterModule,
    TranslationModule,
    LazyLoadImageModule
  ],
  exports: [StatisticsComponent]
})
export class StatisticsModule { }
