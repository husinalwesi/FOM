import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragNdropComponent } from './drag-ndrop.component';
import { SvgModule } from '../../svg/svg.module';

@NgModule({
  declarations: [DragNdropComponent],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [DragNdropComponent]
})
export class DragNdropModule { }
