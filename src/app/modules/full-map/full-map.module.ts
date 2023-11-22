import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullMapComponent } from './full-map.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { FahesMapModule } from '../fahes-map/fahes-map.module';
import { FullMapFilterModule } from '../full-map-filter/full-map-filter.module';
import { FullMapViewModule } from '../full-map-view/full-map-view.module';
import { InspectionCenterFilterModule } from '../inspection-center-filter/inspection-center-filter.module';
import { SvgModule } from '../svg/svg.module';


@NgModule({
  declarations: [
    FullMapComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    SvgModule,
    FahesMapModule,
    InspectionCenterFilterModule,
    FullMapFilterModule,
    FullMapViewModule
  ],
  exports: [FullMapComponent]
})
export class FullMapModule { }
