import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDivComponent } from './modal-div.component';



@NgModule({
  declarations: [
    ModalDivComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ModalDivComponent]
})
export class ModalDivModule { }
