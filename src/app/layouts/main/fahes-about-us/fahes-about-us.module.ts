import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesAboutUsRoutingModule } from './fahes-about-us-routing.module';
import { FahesAboutUsComponent } from './fahes-about-us.component';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { EthicItemModule } from 'src/app/modules/ethic-item/ethic-item.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { DetailedAboutUsModule } from 'src/app/modules/detailed-about-us/detailed-about-us.module';


@NgModule({
  declarations: [
    FahesAboutUsComponent
  ],
  imports: [
    CommonModule,
    FahesAboutUsRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    EthicItemModule,
    HeroHalfModule,
    TranslationModule,
    DetailedAboutUsModule
  ]
})
export class FahesAboutUsModule { }
