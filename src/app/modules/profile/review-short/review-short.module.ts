import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewShortComponent } from './review-short.component';
import { StarsModule } from "../../stars/stars.module";

@NgModule({
  declarations: [
    ReviewShortComponent
  ],
  imports: [
    CommonModule,
    StarsModule
],
  exports: [ReviewShortComponent]
})
export class ReviewShortModule { }
