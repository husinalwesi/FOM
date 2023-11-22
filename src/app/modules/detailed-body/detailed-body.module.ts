import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedBodyComponent } from './detailed-body.component';

@NgModule({
  declarations: [
    DetailedBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DetailedBodyComponent]
})
export class DetailedBodyModule { }
