import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from './add-post.component';
import { SvgModule } from '../../svg/svg.module';
import { ModalModule } from '../../modal/modal.module';

@NgModule({
  declarations: [
    AddPostComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    ModalModule
  ],
  exports: [AddPostComponent]
})
export class AddPostModule { }
