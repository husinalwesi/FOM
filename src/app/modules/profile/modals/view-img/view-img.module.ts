import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewImgComponent } from './view-img.component';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';

@NgModule({
  declarations: [
    ViewImgComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    SvgModule
  ],
  exports: [ViewImgComponent]
})
export class ViewImgModule { }
