import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoListComponent } from './info-list.component';
import { SvgModule } from '../../svg/svg.module';
import { ModalModule } from '../../modal/modal.module';
import { RouterModule } from '@angular/router';
import { MapModule } from "../modals/map/map.module";
import { HoursModule } from "../modals/hours/hours.module";

@NgModule({
  declarations: [
    InfoListComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    ModalModule,
    RouterModule,
    MapModule,
    HoursModule
],
  exports: [InfoListComponent]
})
export class InfoListModule { }
