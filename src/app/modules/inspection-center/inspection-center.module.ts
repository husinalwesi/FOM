import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspectionCenterComponent } from './inspection-center.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from '../svg/svg.module';
import { FahesMapModule } from '../fahes-map/fahes-map.module';
import { InspectionCenterFilterModule } from '../inspection-center-filter/inspection-center-filter.module';

@NgModule({
  declarations: [
    InspectionCenterComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    SvgModule,
    FahesMapModule,
    InspectionCenterFilterModule
  ],
  exports: [InspectionCenterComponent]
})
export class InspectionCenterModule { }
