import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from './add-post.component';
import { SvgModule } from '../../svg/svg.module';
import { ModalModule } from '../../modal/modal.module';
import { AddPostModalModule } from "../modals/add-post-modal/add-post-modal.module";

@NgModule({
  declarations: [
    AddPostComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    ModalModule,
    AddPostModalModule
],
  exports: [AddPostComponent]
})
export class AddPostModule { }
