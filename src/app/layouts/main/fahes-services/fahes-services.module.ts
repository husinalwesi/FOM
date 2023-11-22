import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesServicesRoutingModule } from './fahes-services-routing.module';
import { FahesServicesComponent } from './fahes-services.component';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { ServicesModule } from 'src/app/modules/services/services.module';
import { FahesStoryModule } from 'src/app/modules/fahes-story/fahes-story.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';


@NgModule({
  declarations: [
    FahesServicesComponent
  ],
  imports: [
    CommonModule,
    FahesServicesRoutingModule,
    HeroHalfModule,
    ServicesModule,
    FahesStoryModule,
    BreadcrumbSectionSecondStyleModule
  ]
})
export class FahesServicesModule { }
