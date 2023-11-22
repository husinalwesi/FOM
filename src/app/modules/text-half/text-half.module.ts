import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextHalfComponent } from './text-half.component';
import { DetailedBodyModule } from '../detailed-body/detailed-body.module';

@NgModule({
  declarations: [
    TextHalfComponent
  ],
  imports: [
    CommonModule,
    DetailedBodyModule
  ],
  exports: [TextHalfComponent]
})
export class TextHalfModule { }
