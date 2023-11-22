import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgModule } from '../svg/svg.module';
import { FaqComponent } from './faq.component';
import { DetailedBodyModule } from '../detailed-body/detailed-body.module';



@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    SvgModule,
    DetailedBodyModule
  ],
  exports: [FaqComponent]
})
export class FaqModule { }
