import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesMediaCenterWrapperComponent } from './fahes-media-center-wrapper.component';
import { FahesMediaCenterWrapperRoutingModule } from './fahes-media-center-wrapper-routing.module';
import { HeroBgHalfModule } from 'src/app/modules/hero-bg-half/hero-bg-half.module';
import { FahesTabsMediaCenterModule } from 'src/app/modules/fahes-tabs-media-center/fahes-tabs-media-center.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { TranslationModule } from 'src/app/i18n/translation.module';



@NgModule({
  declarations: [
    FahesMediaCenterWrapperComponent
  ],
  imports: [
    CommonModule,
    FahesMediaCenterWrapperRoutingModule,
    HeroBgHalfModule,
    FahesTabsMediaCenterModule,
    HeroHalfModule,
    TranslationModule
  ]
})
export class FahesMediaCenterWrapperModule { }
