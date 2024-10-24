import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoListComponent } from './info-list.component';
import { SvgModule } from '../../svg/svg.module';
import { ModalModule } from '../../modal/modal.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    InfoListComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    ModalModule,
    RouterModule
  ],
  exports: [InfoListComponent]
})
export class InfoListModule { }
