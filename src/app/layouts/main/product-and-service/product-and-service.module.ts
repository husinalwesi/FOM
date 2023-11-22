import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAndServiceComponent } from './product-and-service.component';
import { ProductAndServiceRoutingModule } from './product-and-service-routing.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { TabsProductAndServiceModule } from 'src/app/modules/tabs-product-and-service/tabs-product-and-service.module';
import { DetailProductAndServiceModule } from 'src/app/modules/detail-product-and-service/detail-product-and-service.module';
import { RetailPricesModule } from 'src/app/modules/retail-prices/retail-prices.module';
import { StatisticsProductAndServiceModule } from 'src/app/modules/statistics-product-and-service/statistics-product-and-service.module';
import { DetailedAboutUsModule } from 'src/app/modules/detailed-about-us/detailed-about-us.module';
import { InspectionCenterModule } from 'src/app/modules/inspection-center/inspection-center.module';
import { AutoCareServiceModule } from '../auto-care-service/auto-care-service.module';
import { LatestPromotionModule } from 'src/app/modules/latest-promotion/latest-promotion.module';
import { ServiceTabModule } from 'src/app/modules/service-tab/service-tab.module';
import { ProductTabModule } from 'src/app/modules/product-tab/product-tab.module';
import { WoqoodAppModule } from 'src/app/modules/woqood-app/woqood-app.module';



@NgModule({
  declarations: [
    ProductAndServiceComponent
  ],
  imports: [
    CommonModule,
    ProductAndServiceRoutingModule,
    HeroHalfModule,
    TabsProductAndServiceModule,
    DetailProductAndServiceModule,
    RetailPricesModule,
    StatisticsProductAndServiceModule,
    DetailedAboutUsModule,
    InspectionCenterModule,
    AutoCareServiceModule,
    LatestPromotionModule,
    ServiceTabModule,
    ProductTabModule,
    WoqoodAppModule
  ]
})
export class ProductAndServiceModule { }
