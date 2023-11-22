import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWithImageComponent } from './list-with-image.component';
import { SvgModule } from '../svg/svg.module';
import { ListWithImageItemModule } from '../list-with-image-item/list-with-image-item.module';

@NgModule({
  declarations: [
    ListWithImageComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    ListWithImageItemModule
  ],
  exports: [ListWithImageComponent]
})
export class ListWithImageModule { }
