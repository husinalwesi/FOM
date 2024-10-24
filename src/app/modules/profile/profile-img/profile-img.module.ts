import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileImgComponent } from './profile-img.component';
import { SvgModule } from '../../svg/svg.module';
import { ModalModule } from '../../modal/modal.module';
// import { ImageCropperComponent } from 'ngx-image-cropper';
import { FormsModule } from '@angular/forms';
import { ViewImgModule } from "../modals/view-img/view-img.module";
import { CropImgModule } from "../modals/crop-img/crop-img.module";

@NgModule({
  declarations: [
    ProfileImgComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    ModalModule,
    // ImageCropperComponent,
    FormsModule,
    ViewImgModule,
    CropImgModule
],
  exports: [ProfileImgComponent]
})
export class ProfileImgModule { }
