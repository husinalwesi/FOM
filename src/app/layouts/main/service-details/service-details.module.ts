import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDetailsComponent } from './service-details.component';
import { ServiceDetailsRoutingModule } from './service-details-routing.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { CarouselServiceDetailsModule } from 'src/app/modules/carousel-service-details/carousel-service-details.module';
import { ServiceItemModule } from "../../../modules/service-item/service-item.module";
import { ServiceContainerModule } from "../../../modules/service-container/service-container.module";



@NgModule({
  declarations: [
    ServiceDetailsComponent
  ],
  imports: [
    CommonModule,
    ServiceDetailsRoutingModule,
    SvgModule,
    CarouselServiceDetailsModule
    // ProviderDetailedRoutingModule,
    // SvgModule,
    // ModalModule
    ,
    ServiceItemModule,
    ServiceContainerModule
],
  exports: [ServiceDetailsComponent]
})
export class ServiceDetailsModule { }
