import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemsAndRegulationsComponent } from './systems-and-regulations.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SystemsAndRegulationsRoutingModule } from './systems-and-regulations-routing.module';
import { BreadcrumbSectionFirstStyleModule } from 'src/app/modules/breadcrumb-section-first-style/breadcrumb-section-first-style.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { ItemFilesModule } from 'src/app/modules/item-files/item-files.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';

@NgModule({
  declarations: [
    SystemsAndRegulationsComponent
  ],
  imports: [
    CommonModule,
    SystemsAndRegulationsRoutingModule,
    TranslationModule,
    BreadcrumbSectionFirstStyleModule,
    HeroHalfModule,
    ItemFilesModule,
    BreadcrumbSectionSecondStyleModule
  ]
})
export class SystemsAndRegulationsModule { }
