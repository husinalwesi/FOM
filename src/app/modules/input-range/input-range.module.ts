import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputRangeComponent } from './input-range.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputRangeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [InputRangeComponent]
})
export class InputRangeModule { }
