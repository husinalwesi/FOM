import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailesPageComponent } from './detailes-page.component';
import { DetailesPageRoutingModule } from './detailes-page-routing.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { DetailedBodyModule } from 'src/app/modules/detailed-body/detailed-body.module';
import { FahesEventCardModule } from 'src/app/modules/fahes-event-card/fahes-event-card.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    DetailesPageComponent
  ],
  imports: [
    CommonModule,
    DetailesPageRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    TranslationModule,
    DetailedBodyModule,
    FahesEventCardModule,
    LazyLoadImageModule
  ]
})
export class DetailesPageModule { }
