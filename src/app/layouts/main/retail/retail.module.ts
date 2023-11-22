import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetailComponent } from './retail.component';
import { RetailRoutingModule } from './retail-routing.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { InspectionCenterModule } from 'src/app/modules/inspection-center/inspection-center.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { RetailPricesModule } from 'src/app/modules/retail-prices/retail-prices.module';
import { CardTwoModule } from 'src/app/modules/card-two/card-two.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { DetailedBodyModule } from 'src/app/modules/detailed-body/detailed-body.module';

@NgModule({
  declarations: [RetailComponent],
  imports: [
    CommonModule,
    RetailRoutingModule,
    HeroHalfModule,
    BreadcrumbSectionSecondStyleModule,
    OurStoryModule,
    SvgModule,
    InspectionCenterModule,
    BtnOneModule,
    RetailPricesModule,
    CardTwoModule,
    DetailedBodyModule
  ]
})
export class RetailModule { }
