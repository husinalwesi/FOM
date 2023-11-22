import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KenarMapComponent } from './kenar-map.component';
import { KenarMapRoutingModule } from './kenar-map-routing.module';
import { InspectionCenterModule } from 'src/app/modules/inspection-center/inspection-center.module';
import { FullMapModule } from 'src/app/modules/full-map/full-map.module';

@NgModule({
  declarations: [
    KenarMapComponent
  ],
  imports: [
    CommonModule,
    KenarMapRoutingModule,
    FullMapModule,
    InspectionCenterModule
  ]
})
export class KenarMapModule { }
