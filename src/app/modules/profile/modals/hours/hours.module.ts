import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoursComponent } from './hours.component';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';

@NgModule({
  declarations: [
    HoursComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    SvgModule
  ],
  exports: [HoursComponent]
})
export class HoursModule { }
