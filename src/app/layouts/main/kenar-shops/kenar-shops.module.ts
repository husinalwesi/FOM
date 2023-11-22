import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KenarShopsRoutingModule } from './kenar-shops-routing.module';
import { KenarShopsComponent } from './kenar-shops.component';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { FeaturesOfferedModule } from 'src/app/modules/features-offered/features-offered.module';
import { LeasingPropertyModule } from 'src/app/modules/leasing-property/leasing-property.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';

@NgModule({
  declarations: [
    KenarShopsComponent
  ],
  imports: [
    CommonModule,
    KenarShopsRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    FeaturesOfferedModule,
    LeasingPropertyModule,
    HeroHalfModule,
    OurStoryModule
  ],
  exports: [KenarShopsComponent]
})
export class KenarShopsModule { }
