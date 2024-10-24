import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewCardComponent } from './review-card.component';
import { SvgModule } from '../../svg/svg.module';

@NgModule({
  declarations: [
    ReviewCardComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [ReviewCardComponent]
})
export class ReviewCardModule { }
