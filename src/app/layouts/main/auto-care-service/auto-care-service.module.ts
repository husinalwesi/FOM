import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCareServiceComponent } from './auto-care-service.component';
import { AutoCareServiceRoutingModule } from './auto-care-service-routing.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { DeliveryItemModule } from 'src/app/modules/delivery-item/delivery-item.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { OffersPromotionComponent } from 'src/app/components/offers-promotion/offers-promotion.component';
import { BecomeSupplierModule } from 'src/app/modules/become-supplier/become-supplier.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { CardTwoModule } from 'src/app/modules/card-two/card-two.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [AutoCareServiceComponent, OffersPromotionComponent],
  imports: [
    CommonModule,
    AutoCareServiceRoutingModule,
    HeroHalfModule,
    BreadcrumbSectionSecondStyleModule,
    OurStoryModule,
    DeliveryItemModule,
    BtnOneModule,
    SvgModule,
    BecomeSupplierModule,
    TranslationModule,
    CardTwoModule,
    FormsModule,
    LazyLoadImageModule
  ]
})
export class AutoCareServiceModule { }
