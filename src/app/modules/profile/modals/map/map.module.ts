import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    SvgModule
  ],
  exports: [MapComponent]
})
export class MapModule { }
