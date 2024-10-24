import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostModalComponent } from './add-post-modal.component';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';

@NgModule({
  declarations: [
    AddPostModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    SvgModule
  ],
  exports: [AddPostModalComponent]
})
export class AddPostModalModule { }
