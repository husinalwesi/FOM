import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddReviewComponent } from './add-review.component';
import { StarsModule } from 'src/app/modules/stars/stars.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';

@NgModule({
  declarations: [
    AddReviewComponent
  ],
  imports: [
    CommonModule,
    StarsModule,
    SvgModule,
    ModalModule
  ],
  exports: [AddReviewComponent]
})
export class AddReviewModule { }
