import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessWithWoqodRoutingModule } from './business-with-woqod-routing.module';
import { BusinessWithWoqodComponent } from './business-with-woqod.component';
import { HeroBgHalfCarouselModule } from 'src/app/modules/hero-bg-half-carousel/hero-bg-half-carousel.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { ServicesModule } from 'src/app/modules/services/services.module';
import { BecomeSupplierModule } from 'src/app/modules/become-supplier/become-supplier.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BusinessWithWoqodComponent
  ],
  imports: [
    CommonModule,
    BusinessWithWoqodRoutingModule,
    HeroBgHalfCarouselModule,
    BreadcrumbSectionSecondStyleModule,
    ServicesModule,
    BecomeSupplierModule,
    HeroHalfModule,
    FormsModule
  ],
  exports: [BusinessWithWoqodComponent]
})
export class BusinessWithWoqodModule { }
