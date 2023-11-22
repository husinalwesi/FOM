import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaCenterWrapperRoutingModule } from './media-center-wrapper-routing.module';
import { MediaCenterWrapperComponent } from './media-center-wrapper.component';
import { BoxsIconNewsModule } from 'src/app/modules/boxs-icon-news/boxs-icon-news.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';


@NgModule({
  declarations: [
    MediaCenterWrapperComponent
  ],
  imports: [
    CommonModule,
    MediaCenterWrapperRoutingModule,
    BoxsIconNewsModule,
    HeroHalfModule,
    BreadcrumbSectionSecondStyleModule
  ]
})
export class MediaCenterWrapperModule { }
