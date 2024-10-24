import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropImgComponent } from './crop-img.component';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { FormsModule } from '@angular/forms';
import { InputRangeModule } from "../../../input-range/input-range.module";

@NgModule({
  declarations: [
    CropImgComponent
  ],
  imports: [
    CommonModule,
    ImageCropperComponent,
    ModalModule,
    SvgModule,
    FormsModule,
    InputRangeModule
],
  exports: [CropImgComponent]
})
export class CropImgModule { }
